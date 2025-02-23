/* @flow */
/** @jsx node */

import { node, type ComponentNode } from "@krakenjs/jsx-pragmatic/src";

import { SVGLogo, getLogoColors, type SVGLogoProps } from "../../lib";
import { LOGO_COLOR, LOGO } from "../../constants";
import { type LogoColorMap } from "../../types";

const LOGO_COLORS: LogoColorMap = {
  [LOGO_COLOR.DEFAULT]: {
    primary: "#A6d71c",
    secondary: "#3C932A",
    tertiary: "#6CC62E",
    quaternary: "#278D30",
  },
  [LOGO_COLOR.WHITE]: {
    primary: "#FFFFFF",
    secondary: "#FFFFFF",
    tertiary: "#000000",
    quaternary: "#FFFFFF",
  },
  [LOGO_COLOR.BLACK]: {
    primary: "#333030",
    secondary: "#333030",
    tertiary: "#ffffff",
    quaternary: "#333030",
  },
};

export function PayuLogo({
  logoColor = LOGO_COLOR.DEFAULT,
  ...props
}: {
  logoColor?: $Values<typeof LOGO_COLOR>,
}): ComponentNode<SVGLogoProps> {
  const { primary, secondary, tertiary, quaternary } = getLogoColors(
    LOGO.P24,
    LOGO_COLORS,
    logoColor
  );

  return (
    <SVGLogo
      {...props}
      name={LOGO.P24}
      logoColor={logoColor}
      render={() => {
        return (
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 385.6 192.4"
            width="70"
            height="32"
          >
            <style type="text/css" />
            <g>
              <path
                fill={primary}
                d="M382.2,40.3l-17.1,0c-1.9,0-3.4-1.5-3.4-3.4l0-17.3c0-1.9,1.5-3.4,3.4-3.4l17.1,0c1.9,0,3.4,1.5,3.4,3.4
                            l0,17.3C385.6,38.8,384.1,40.3,382.2,40.3"
              />
              <path
                fill={primary}
                d="M359.5,16.3l-11.6,0c-1.3,0-2.3-1-2.3-2.3l0-11.7c0-1.3,1-2.3,2.3-2.3l11.6,0c1.3,0,2.3,1,2.3,2.3l0,11.7
                            C361.8,15.3,360.8,16.3,359.5,16.3"
              />
              <g>
                <g>
                  <path
                    fill={primary}
                    d="M178.3,192.4c-3.9,0-5.1-2.1-5.8-5.6l-0.3-1.5c-0.3-1.6-0.5-3.3,0.4-4.6c0.9-1.2,2.5-1.5,4.9-1.7
                                  c12.1-1.2,16.2-6.8,20.2-19.5c-1.9,0.6-4.2,1-6.7,1c-13.3,0-16.8-9.2-19.8-20.4l-15.9-58.3c-0.5-2-0.9-4,0.2-5.3
                                  c1-1.3,3-1.5,5.1-1.5h1.3c5,0,6.9,1.5,8.2,6.3l15.8,57.8c2,7.2,4.1,8.4,9.2,8.4c4.2,0,6.6-1.3,8.4-8.4l13.9-57.8
                                  c1.1-4.8,3.1-6.3,8.1-6.3h1.5c2,0,4,0.2,5.1,1.5c1.1,1.3,0.8,3.3,0.3,5.3L213,158.9c-5.7,22.6-15.3,32.3-33.3,33.5
                                  C179.2,192.4,178.7,192.4,178.3,192.4 M113.5,160.6c-21,0-32.6-9.3-32.6-26.2c0-17.4,11.2-25.5,35.3-25.5h18.7v-9
                                  c0-10.1-6.1-14.2-20.9-14.2c-8.3,0-15.8,1.2-18.2,1.8c-1,0.2-1.8,0.4-2.6,0.4c-1.5,0-2.6-0.5-3.3-1.6c-0.6-0.9-0.9-2.2-0.9-4
                                  v-1.3c0-4.7,1.7-5.8,5.9-6.7c2.3-0.5,8.5-1.7,18.3-1.7c24.4,0,36.3,9,36.3,27.4V133C149.6,152.1,138.5,160.6,113.5,160.6
                                  M116.4,120.8c-14.9,0-20.7,3.8-20.7,13.5c0,8.9,5.8,13.2,17.7,13.2c18,0,21.6-5.5,21.6-15v-11.7H116.4 M294.3,160.5
                                  L294.3,160.5h-0.2c-21.8,0-37.1-6.6-45.1-19.1c-4.1-6.4-6.2-14.4-6.2-23.8v-12.8V81.4V59.2c0-9.4,3.9-11.2,14.2-11.2h3.3
                                  c10.4,0,14.2,1.7,14.2,11.2v22.1l0,0.1v4.8c0,0.2,0,0.3,0,0.5v30.9c0,3.8,0.7,6.8,2.2,9.1c2.8,4.4,8.4,6.3,17.4,6.3
                                  c9,0,14.6-2,17.4-6.3c1.5-2.3,2.2-5.3,2.2-9.1V86.8c0-0.2,0-0.3,0-0.5v-4.8l0-0.1V59.2c0-9.4,3.9-11.2,14.2-11.2h1.7l0,20
                                  c0,2.5,2,4.5,4.5,4.5l11.3,0v8.8v23.4v12.8c0,9.4-2.1,17.4-6.2,23.8C331.5,153.9,316.1,160.5,294.3,160.5 M8.4,159.1H6.8
                                  c-5.1,0-6.8-1.6-6.8-6.8V67.2C0,53.9,5.9,48,19.2,48H44c25.5,0,37.4,11.3,37.4,35.6c0,24.3-11.9,35.6-37.4,35.6H15.2v33.1
                                  C15.2,157.5,13.6,159.1,8.4,159.1 M22,62.4c-5,0-6.8,1.8-6.8,6.8V105H44c18.7,0,22.2-7.5,22.2-21.4c0-17.8-8.2-21.2-22.2-21.2
                                  H22"
                  />
                  <g>
                    <linearGradient
                      id="SVGID_3_"
                      gradientUnits="userSpaceOnUse"
                      x1="-487.0462"
                      y1="484.3289"
                      x2="-486.0462"
                      y2="484.3289"
                      gradientTransform="matrix(0 146.8947 146.8947 0 -70972.5312 71622.9766)"
                    >
                      <stop offset="0" stop-color={primary} />
                      <stop offset="1" stop-color={secondary} />
                    </linearGradient>
                    <path
                      style="fill:url(#SVGID_3_)"
                      d="M178.3,192.4c-3.9,0-5.1-2.1-5.8-5.6l-0.3-1.5c-0.3-1.6-0.5-3.3,0.4-4.6c0.9-1.2,2.5-1.5,4.9-1.7
                                  c12.1-1.2,16.2-6.8,20.2-19.5c-1.9,0.6-4.2,1-6.7,1c-13.3,0-16.8-9.2-19.8-20.4l-15.9-58.3c-0.5-2-0.9-4,0.2-5.3
                                  c1-1.3,3-1.5,5.1-1.5h1.3c5,0,6.9,1.5,8.2,6.3l15.8,57.8c2,7.2,4.1,8.4,9.2,8.4c4.2,0,6.6-1.3,8.4-8.4l13.9-57.8
                                  c1.1-4.8,3.1-6.3,8.1-6.3h1.5c2,0,4,0.2,5.1,1.5c1.1,1.3,0.8,3.3,0.3,5.3L213,158.9c-5.7,22.6-15.3,32.3-33.3,33.5
                                  C179.2,192.4,178.7,192.4,178.3,192.4 M113.5,160.6c-21,0-32.6-9.3-32.6-26.2c0-17.4,11.2-25.5,35.3-25.5h18.7v-9
                                  c0-10.1-6.1-14.2-20.9-14.2c-8.3,0-15.8,1.2-18.2,1.8c-1,0.2-1.8,0.4-2.6,0.4c-1.5,0-2.6-0.5-3.3-1.6c-0.6-0.9-0.9-2.2-0.9-4
                                  v-1.3c0-4.7,1.7-5.8,5.9-6.7c2.3-0.5,8.5-1.7,18.3-1.7c24.4,0,36.3,9,36.3,27.4V133C149.6,152.1,138.5,160.6,113.5,160.6
                                  M116.4,120.8c-14.9,0-20.7,3.8-20.7,13.5c0,8.9,5.8,13.2,17.7,13.2c18,0,21.6-5.5,21.6-15v-11.7H116.4 M294.3,160.5
                                  L294.3,160.5h-0.2c-21.8,0-37.1-6.6-45.1-19.1c-4.1-6.4-6.2-14.4-6.2-23.8v-12.8V81.4V59.2c0-9.4,3.9-11.2,14.2-11.2h3.3
                                  c10.4,0,14.2,1.7,14.2,11.2v22.1l0,0.1v4.8c0,0.2,0,0.3,0,0.5v30.9c0,3.8,0.7,6.8,2.2,9.1c2.8,4.4,8.4,6.3,17.4,6.3
                                  c9,0,14.6-2,17.4-6.3c1.5-2.3,2.2-5.3,2.2-9.1V86.8c0-0.2,0-0.3,0-0.5v-4.8l0-0.1V59.2c0-9.4,3.9-11.2,14.2-11.2h1.7l0,20
                                  c0,2.5,2,4.5,4.5,4.5l11.3,0v8.8v23.4v12.8c0,9.4-2.1,17.4-6.2,23.8C331.5,153.9,316.1,160.5,294.3,160.5 M8.4,159.1H6.8
                                  c-5.1,0-6.8-1.6-6.8-6.8V67.2C0,53.9,5.9,48,19.2,48H44c25.5,0,37.4,11.3,37.4,35.6c0,24.3-11.9,35.6-37.4,35.6H15.2v33.1
                                  C15.2,157.5,13.6,159.1,8.4,159.1 M22,62.4c-5,0-6.8,1.8-6.8,6.8V105H44c18.7,0,22.2-7.5,22.2-21.4c0-17.8-8.2-21.2-22.2-21.2
                                  H22"
                    />
                  </g>
                </g>
              </g>
              <path
                fill={primary}
                d="M357.3,72.6C357.3,72.6,357.3,72.6,357.3,72.6l-11.7,0V59.2c0-9.4-3.9-11.2-14.2-11.2h-1.6l0-3.2
                            c0-2.5,2-4.5,4.5-4.5l23,0c2.5,0,4.5,2,4.5,4.5l0,23.3C361.8,70.6,359.8,72.6,357.3,72.6"
              />
              <g>
                <linearGradient
                  id="SVGID_4_"
                  gradientUnits="userSpaceOnUse"
                  x1="-487.0462"
                  y1="485.4514"
                  x2="-486.0462"
                  y2="485.4514"
                  gradientTransform="matrix(0 146.8947 146.8947 0 -70972.5312 71622.9766)"
                >
                  <stop offset="0" stop-color={tertiary} />
                  <stop offset="1" stop-color={quaternary} />
                </linearGradient>
                <path
                  style="fill:url(#SVGID_4_)"
                  d="M345.6,72.6l-11.3,0c-2.5,0-4.5-2-4.5-4.5l0-20h1.6c10.4,0,14.2,1.7,14.2,11.2V72.6"
                />
              </g>
            </g>
          </svg>
        );
      }}
    />
  );
}
