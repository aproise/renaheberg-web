interface Env {
  PUBLIC_SITE_URL: string;
}

export async function onRequest(context: { request: Request; next: () => Promise<Response>; env: Env }): Promise<Response> {
  const { request, next, env } = context;
  const url = new URL(request.url);
  const host = url.hostname.toLowerCase();
  
  if (!env.PUBLIC_SITE_URL) {
    return new Response('Config error: PUBLIC_SITE_URL not set', { status: 500 });
  }
  let canonicalHost: string;
  try {
    canonicalHost = new URL(env.PUBLIC_SITE_URL).hostname.toLowerCase();
  } catch {
    return new Response('Config error: Invalid PUBLIC_SITE_URL', { status: 500 });
  }
  const canonicalHostWww = `www.${canonicalHost}`;
  
  const isCanonical = host === canonicalHost;
  const isWww = host === canonicalHostWww;
  const isPagesDev = host.endsWith('.pages.dev');
  
  if (!isCanonical && !isPagesDev) {
    return Response.redirect(env.PUBLIC_SITE_URL + url.pathname + url.search, 301);
  }
  
  if (isWww) {
    return Response.redirect(env.PUBLIC_SITE_URL + url.pathname + url.search, 301);
  }
  
  if (!isPagesDev) {
    return next();
  }
  
  const response = await next();
  const contentType = response.headers.get('Content-Type') || '';
  
  if (!contentType.includes('text/html')) {
    return response;
  }
  
  const rewriter = new HTMLRewriter()
    .on('head', new HeadHandler())
    .on('link[rel="canonical"]', new RemoveElementHandler());
  
  const newResponse = rewriter.transform(response);
  
  const headers = new Headers(newResponse.headers);
  headers.set('X-Robots-Tag', 'noindex, nofollow');
  
  return new Response(newResponse.body, {
    status: newResponse.status,
    headers,
  });
}

class HeadHandler {
  element(element: Element): void {
    element.append(`<meta name="robots" content="noindex, nofollow">`, { html: true });
  }
}

class RemoveElementHandler {
  element(element: Element): void {
    element.remove();
  }
}