interface Request {
  url: string;
  method: string;
  payload: Record<string, any>;
}

function createRequest(): Request {
  return {
    url: "",
    method: "",
    payload: {},
  };
}

interface RequestPattern {
  request: Request;
  forUrl(url: string): RequestPattern;
  useMethod(method: string): RequestPattern;
  withPayload(payload: Record<string, any>): RequestPattern;
  build(): Request;
}

function createRequestPattern(): RequestPattern {
  const request = createRequest();
  return {
    request,
    forUrl: function (url: string): RequestPattern {
      request.url = url;
      return this;
    },
    useMethod: function (method: string): RequestPattern {
      request.method = method;
      return this;
    },
    withPayload: function (payload: Record<string, any>): RequestPattern {
      request.payload = payload;
      return this;
    },
    build: function (): Request {
      return request;
    },
  };
}

export default createRequestPattern;
