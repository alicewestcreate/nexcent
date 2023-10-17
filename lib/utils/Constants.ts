export interface MediaQuery {
  mobile: number;
  tablet: number;
  desktop: number;
  large: number;
}

export const MQ: MediaQuery = {
  mobile: 576,
  tablet: 768,
  desktop: 992,
  large: 1200,
};

export const MediaQuery = {
  mobile: `@media (min-width: ${MQ.mobile}px)`,
  tablet: `@media (min-width: ${MQ.tablet}px)`,
  desktop: `@media (min-width: ${MQ.desktop}px)`,
  large: `@media (min-width: ${MQ.large}px)`,
};

export const ContainerQuery = {
  mobile: `@container (min-width: ${MQ.mobile}px)`,
  tablet: `@container (min-width: ${MQ.tablet}px)`,
  desktop: `@container (min-width: ${MQ.desktop}px)`,
  large: `@container (min-width: ${MQ.large}px)`,
};

