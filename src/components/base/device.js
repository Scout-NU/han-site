export const size = {
  smMobile: 375,
  mobile: 680,
  tablet: 975,
  smLaptop: 1280,
  desktop: 1400,
  fourK: 1650,

};

export const device = {
  smMobile: `(max-width: ${size.smMobile}px)`,
  mobile: `(max-width: ${size.mobile}px)`,
  tablet: `(max-width: ${size.tablet}px)`,
  smLaptop: `(max-width: ${size.smLaptop}px)`,
  desktop: `(max-width: ${size.desktop}px)`,
  fourK: `(min-width: ${size.fourK}px)`,
};
