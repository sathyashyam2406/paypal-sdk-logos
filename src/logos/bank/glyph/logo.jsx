/* @flow */
/** @jsx node */

import { node, type ComponentNode } from 'jsx-pragmatic/src';

import { type LogoColorMap } from '../../../types';
import { SVGLogo, type SVGLogoProps, getLogoColors } from '../../../lib';
import { LOGO_COLOR, LOGO } from '../../../constants';

const LOGO_COLORS : LogoColorMap = {
    [LOGO_COLOR.DEFAULT]: {
        primary: '#333030'
    },
    [LOGO_COLOR.WHITE]: {
        primary: '#ffffff'
    },
    [LOGO_COLOR.BLACK]: {
        primary: '#333030'
    }
};

// eslint-disable-next-line flowtype/require-exact-type
export function GlyphBank({ logoColor, ...props } : { logoColor? : $Values<typeof LOGO_COLOR> } = {}) : ComponentNode<SVGLogoProps> {
    const { primary } = getLogoColors(LOGO.BANK, LOGO_COLORS, logoColor);

    return (
        <SVGLogo
            { ...props }
            name={ LOGO.BANK }
            render={ () => {
                return (
                    <svg width="19px" height="18px" viewBox="0 0 19 18" xmlns="http://www.w3.org/2000/svg">
                        <g transform="matrix(0.755484, 0, 0, 0.755484, 0.58609, -0.136891)">
                            <g transform="translate(-3.000000, -3.000000)" fill={ primary }>
                                <path d="M7.5,11.25 L4.375,11.25 C3.73824612,11.25 3.50927246,10.4091381 4.05811242,10.0862911 L14.0493373,4.20910003 C14.6361169,3.86393557 15.3638831,3.86393557 15.9506627,4.20910003 L25.9418876,10.0862911 C26.4907275,10.4091381 26.2617539,11.25 25.625,11.25 L22.5,11.25 L22.5,18.1459005 C22.5,18.4910785 22.220178,18.7709005 21.875,18.7709005 C21.529822,18.7709005 21.25,18.4910785 21.25,18.1459005 L21.25,10.625 C21.25,10.279822 21.529822,10 21.875,10 L23.3298073,10 L15.3168875,5.28651779 C15.1212944,5.17146298 14.8787056,5.17146298 14.6831125,5.2865178 L6.67019269,10 L16.875,10 C17.9105339,10 18.75,10.8394661 18.75,11.875 L18.75,18.1459005 C18.75,18.4910785 18.470178,18.7709005 18.125,18.7709005 C17.779822,18.7709005 17.5,18.4910785 17.5,18.1459005 L17.5,11.875 C17.5,11.5298221 17.2201779,11.25 16.875,11.25 L13.7537575,11.25 L13.7537575,20.9375 C13.7537575,21.110089 13.8936685,21.25 14.0662575,21.25 L23.125,21.25 C23.470178,21.25 23.75,21.529822 23.75,21.875 L23.75,22.4947548 L25.625,22.4947548 C25.970178,22.4947548 26.25,22.7745768 26.25,23.1197548 L26.25,25.625 C26.25,25.970178 25.970178,26.25 25.625,26.25 L4.375,26.25 C4.02982203,26.25 3.75,25.970178 3.75,25.625 L3.75,23.1197548 C3.75,22.7745768 4.02982203,22.4947548 4.375,22.4947548 L6.25,22.4947548 L6.25,21.875 C6.25,21.529822 6.52982203,21.25 6.875,21.25 L9.30555555,21.25 C9.65073352,21.25 9.93055555,21.529822 9.93055555,21.875 C9.93055555,22.220178 9.65073352,22.5 9.30555555,22.5 L7.5,22.5 L7.5,23.1197548 C7.5,23.4649327 7.22017797,23.7447548 6.875,23.7447548 L5,23.7447548 L5,25 L25,25 L25,23.7447548 L23.125,23.7447548 C22.779822,23.7447548 22.5,23.4649327 22.5,23.1197548 L22.5,22.5 L14.0662575,22.5 C13.2033125,22.5 12.5037575,21.800445 12.5037575,20.9375 L12.5037575,11.25 L8.75,11.25 L8.75,18.1622438 C8.75,18.5074217 8.47017797,18.7872438 8.125,18.7872438 C7.77982203,18.7872438 7.5,18.5074217 7.5,18.1622438 L7.5,11.25 Z" />
                            </g>
                        </g>
                    </svg>
                );
            } }
        />
    );
}
