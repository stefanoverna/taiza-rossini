export interface Tag {
  tag: string;
  attributes?: Record<string, string> | null;
  content?: string | null;
}

export interface ColorField {
  red: number;
  green: number;
  blue: number;
}

export interface StructuredTextField {
  value: unknown;
}

export interface ResponsiveImage {
  src: string;
  srcSet: string;
  base64?: string;
  width: number;
  height: number;
}

export interface FocalPoint {
  x: number;
  y: number;
}

export interface FileField {
  url: string;
  responsiveImage?: ResponsiveImage;
  focalPoint?: FocalPoint;
}

export interface Work {
  id: string;
  coverImage: {
    responsiveImage: ResponsiveImage;
  };
}

export interface LayoutQuery {
  site: {
    faviconMetaTags: Tag[];
  };
  homepage: {
    accentColor: ColorField;
    highlightColor: ColorField;
  };
}

export interface HomeQuery {
  homepage: {
    _seoMetaTags: Tag[];
    title: string;
    tagline: StructuredTextField;
    description: StructuredTextField;
  };
  works: Work[];
  meta: {
    count: number;
  };
}

export interface AboutQuery {
  about: {
    _seoMetaTags: Tag[];
    kicker: string;
    title: string;
    subtitle: StructuredTextField;
    content: StructuredTextField;
    signature: FileField;
    image: FileField;
  };
}

export interface ContactQuery {
  contact: {
    _seoMetaTags: Tag[];
    kicker: string;
    title: string;
    content: StructuredTextField;
  };
}
