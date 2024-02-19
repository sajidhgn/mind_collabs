"use client";
import React from "react";
import Link from 'next/link';
import Logo from '@/app/components/common/logo';
import CustomImage from '@/app/components/common/custom_image';
import { routes } from '@/app/routes';

const Sidebar = (props:any) => {
   

    return (
        <>
            <div className="sidebar"  >
                <div className='sidebar-logo'><Link href={routes.home}><Logo /></Link></div>
                <div className="sidebar-toggle" id="sidebarToggle" onClick={props.actClick}>
                    <div><CustomImage src="/images/toggle-icon.svg" width={24} height={24} />
                        <CustomImage src="/images/ar-icon.svg" width={16} height={16} className="toggle-icon" /></div>
                </div>
                <ul className='sidebar-menu'>
                    <li><Link href="#" className='nav_link'><div className="left-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="8px" height="10px" viewBox="0 0 8 10" version="1.1">
                        <title>Group 17</title>
                        <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="07---Mind-Collab-Collective---Profile-Page" transform="translate(-26, -160)" fill="#CE9569">
                                <g id="Group" transform="translate(8, 143)">
                                    <g id="Group-14" transform="translate(11, 11)">
                                        <g id="Group-17" transform="translate(7, 6)">
                                            <path d="M1.67613796,9.99809677 C0.629659884,9.99699876 -0.0402979006,9.30012445 0.00188259768,8.25810704 C0.0811308066,6.3007101 1.67540756,4.62898038 3.62191887,4.46208191 C5.66338195,4.28694832 7.51932387,5.64208336 7.91227813,7.6126565 C7.97910957,7.94755145 8.02366386,8.30349171 7.98659615,8.63948468 C7.89803536,9.44012152 7.23921615,9.99077666 6.42117012,9.99681575 C5.61152367,10.0030378 4.80205983,9.99827977 3.99241338,9.99827977 C3.22038244,9.99827977 2.4481689,9.99901179 1.67613796,9.99809677 Z" id="Fill-1" />
                                            <path d="M5.89430628,1.87705888 C5.89740154,2.94378166 5.09085929,3.75375163 4.01498268,3.76399978 C2.94056687,3.77443094 2.11028667,2.95055276 2.11338219,1.87705888 C2.11631246,0.812898144 2.93527149,-0.000365881922 4.00366151,0 C5.07314713,0.000549131609 5.89119316,0.812532139 5.89430628,1.87705888" id="Fill-4" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg></div> <span>Basic & Contact Info </span>
                    </Link>
                    </li>
                    <li><Link href="#" className='nav_link'><div className="left-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="10px" height="13px" viewBox="0 0 10 13" version="1.1">
                        <title>Combined Shape</title>
                        <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="07---Mind-Collab-Collective---Profile-Page" transform="translate(-25, -208)" fill="#D19A71">
                                <path d="M31.7516153,220.133246 C30.870491,221.282721 29.1399458,221.289935 28.2484727,220.148657 C27.6048774,219.324957 26.957504,218.454203 26.6296285,217.898238 C25.9589293,216.76106 25.4037093,215.574532 25.1346411,214.271269 C24.9110747,213.189179 24.9496773,212.123648 25.3738128,211.091728 C25.7731442,210.119814 26.4149325,209.343661 27.3047629,208.78081 C28.2816545,208.162707 29.3529991,207.913007 30.4995777,208.026626 C31.7018426,208.145656 32.7368844,208.638335 33.5858125,209.503843 C34.2543763,210.185396 34.6811401,211.000898 34.8845017,211.931331 C35.0540245,212.706829 35.0275776,213.484131 34.867418,214.257825 C34.6569929,215.273678 34.2762237,216.227065 33.7911454,217.140611 C33.3397416,217.990872 32.5154535,219.136575 31.7516153,220.133246 M30.0000137,214.999997 C31.1045832,214.999997 32.0000137,214.104566 32.0000137,212.999997 C32.0000137,211.895427 31.1045832,210.999997 30.0000137,210.999997 C28.8954442,210.999997 28.0000137,211.895427 28.0000137,212.999997 C28.0000137,214.104566 28.8954442,214.999997 30.0000137,214.999997 Z" id="Combined-Shape" />
                            </g>
                        </g>
                    </svg></div> <span>Office Details</span>
                    </Link>
                    </li>
                    <li><Link href="#" className='nav_link'><div className="left-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="10px" height="10px" viewBox="0 0 10 10" version="1.1">
                        <title>Group 2</title>
                        <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="07---Mind-Collab-Collective---Profile-Page" transform="translate(-25, -256)" fill="#E1906C">
                                <g id="Group-Copy" transform="translate(8, 239)">
                                    <g id="Group-4-Copy-6" transform="translate(11, 11)">
                                        <g id="Group-2" transform="translate(6, 6)">
                                            <rect id="Rectangle" x="0" y="0" width="4.44444444" height="4.44444444" rx="1.66666667" />
                                            <rect id="Rectangle-Copy-8" x="5.55555556" y="0" width="4.44444444" height="4.44444444" rx="1.66666667" />
                                            <rect id="Rectangle-Copy-9" x="5.55555556" y="5.55555556" width="4.44444444" height="4.44444444" rx="1.66666667" />
                                            <rect id="Rectangle-Copy-10" x="0" y="5.55555556" width="4.44444444" height="4.44444444" rx="1.66666667" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg></div> <span>Online Services</span>
                    </Link>
                    </li>
                    <li><Link href="#" className='nav_link'><div className="left-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="10px" height="10px" viewBox="0 0 10 10" version="1.1">
                        <title>Group 5</title>
                        <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                            <g id="07---Mind-Collab-Collective---Profile-Page" transform="translate(-25, -304)" stroke="#E1906C" strokeWidth="2">
                                <g id="Group-Copy-2" transform="translate(8, 287)">
                                    <g id="Group-4-Copy-6" transform="translate(11, 11)">
                                        <g id="Group-10" transform="translate(7.2467, 7.0833)">
                                            <line x1="0" y1="0.5" x2="7.05675648" y2="0.5" id="Path-13" />
                                            <line x1="-1.16639456e-13" y1="3.91666667" x2="5.25352967" y2="3.91666667" id="Path-14" />
                                            <line x1="-6.95057745e-13" y1="7.05707262" x2="6.85161727" y2="7.05707262" id="Path-15" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg></div> <span>Practise Details</span>
                    </Link>
                    </li>
                    <li><Link href="#" className='nav_link'><div className="left-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="8px" height="10px" viewBox="0 0 8 10" version="1.1">
                        <title>Group 17</title>
                        <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="07---Mind-Collab-Collective---Profile-Page" transform="translate(-26, -160)" fill="#CE9569">
                                <g id="Group" transform="translate(8, 143)">
                                    <g id="Group-14" transform="translate(11, 11)">
                                        <g id="Group-17" transform="translate(7, 6)">
                                            <path d="M1.67613796,9.99809677 C0.629659884,9.99699876 -0.0402979006,9.30012445 0.00188259768,8.25810704 C0.0811308066,6.3007101 1.67540756,4.62898038 3.62191887,4.46208191 C5.66338195,4.28694832 7.51932387,5.64208336 7.91227813,7.6126565 C7.97910957,7.94755145 8.02366386,8.30349171 7.98659615,8.63948468 C7.89803536,9.44012152 7.23921615,9.99077666 6.42117012,9.99681575 C5.61152367,10.0030378 4.80205983,9.99827977 3.99241338,9.99827977 C3.22038244,9.99827977 2.4481689,9.99901179 1.67613796,9.99809677 Z" id="Fill-1" />
                                            <path d="M5.89430628,1.87705888 C5.89740154,2.94378166 5.09085929,3.75375163 4.01498268,3.76399978 C2.94056687,3.77443094 2.11028667,2.95055276 2.11338219,1.87705888 C2.11631246,0.812898144 2.93527149,-0.000365881922 4.00366151,0 C5.07314713,0.000549131609 5.89119316,0.812532139 5.89430628,1.87705888" id="Fill-4" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg></div> <span>About You </span>
                    </Link>
                    </li>
                    <li><Link href="#" className='nav_link'><div className="left-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="10px" height="10px" viewBox="0 0 10 10" version="1.1">
                        <title>Group 18</title>
                        <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="07---Mind-Collab-Collective---Profile-Page" transform="translate(-25, -400)">
                                <g id="Group-Copy-4" transform="translate(8, 383)">
                                    <g id="Group-4-Copy-6" transform="translate(11, 11)">
                                        <g id="Group-18" transform="translate(6, 5.9998)">
                                            <path d="M9.72403221,5.69651453 C9.52512488,5.92682851 9.32574787,6.15690771 9.12824957,6.38839556 C8.95446985,6.59217999 8.86757998,6.82977199 8.86546645,7.09694559 C8.86335291,7.35449343 8.86617096,7.61204127 8.8645271,7.86958911 C8.86100454,8.44783918 8.44463772,8.86104265 7.86364984,8.86362517 C7.60603314,8.86479904 7.34841645,8.86362517 7.09079975,8.86385994 C6.82637277,8.86409472 6.59411852,8.95307433 6.39356733,9.12328598 C6.15567698,9.32542699 5.92013501,9.5303853 5.68341885,9.73393496 C5.27362748,10.0868013 4.73796323,10.0889143 4.32958089,9.73886523 C4.10718981,9.54846295 3.88362455,9.35946932 3.6645212,9.16531065 C3.43203211,8.95917847 3.16549159,8.8586949 2.85315777,8.86174697 C2.54528586,8.86503382 2.23412622,8.87747687 1.93001171,8.84061725 C1.47207866,8.78521042 1.140723,8.39031938 1.12874629,7.92828278 C1.12170117,7.65523981 1.12733726,7.38196207 1.1256934,7.10868432 C1.12404954,6.82906766 1.03340228,6.58208468 0.851168411,6.36843971 C0.645920469,6.1282652 0.440672528,5.88785591 0.238242637,5.64509888 C-0.0792576106,5.26405955 -0.079492448,4.73581648 0.238007799,4.35571625 C0.443020903,4.10990715 0.651556569,3.86738489 0.858213534,3.62298443 C1.03387196,3.4154436 1.12240568,3.17456476 1.12545857,2.90363476 C1.12804178,2.64608692 1.12404954,2.38853908 1.12639792,2.13099124 C1.13179918,1.54921955 1.54464343,1.13953771 2.12657066,1.13718996 C2.38794476,1.13601609 2.64955369,1.13812906 2.91116262,1.13648564 C3.1831044,1.13507699 3.42334312,1.0449235 3.62929558,0.867433835 C3.86859495,0.661066879 4.10413692,0.450239203 4.34484532,0.245280894 C4.72927424,-0.0819950306 5.26705203,-0.0815254812 5.65335965,0.245280894 C5.89453773,0.449534879 6.13313259,0.656840934 6.37243196,0.863442666 C6.58495986,1.0468017 6.83059985,1.13625086 7.11193512,1.13789428 C7.42779151,1.13953771 7.74670078,1.12169483 8.05833009,1.16043265 C8.52072505,1.21795245 8.84926266,1.61918241 8.8607697,2.08614928 C8.8645271,2.23053571 8.86147421,2.37492215 8.86147421,2.51930859 C8.85818649,2.51954336 8.8551336,2.51977814 8.85184587,2.51977814 C8.8626484,2.72191915 8.86100454,2.92570359 8.88777601,3.12573163 C8.9121991,3.30956021 9.00096766,3.4720243 9.12449217,3.61382822 C9.32668722,3.84648994 9.52770809,4.08032553 9.72802444,4.31463068 C10.0922573,4.74051198 10.0903786,5.27180711 9.72403221,5.69651453" id="Fill-1" fill="#D89168" />
                                            <polyline id="Path-17" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" points="3.68706357 5.03770643 4.64838409 5.99902694 6.49257148 4.15483955" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg></div>  <span>Specialities</span>
                    </Link>
                    </li>
                    <li><Link href="#" className='nav_link'><div className="left-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="8px" height="9px" viewBox="0 0 8 9" version="1.1">
                        <title>Group 12</title>
                        <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="07---Mind-Collab-Collective---Profile-Page" transform="translate(-26, -449)">
                                <g id="Group-Copy-5" transform="translate(8, 431)">
                                    <g id="Group-4-Copy-6" transform="translate(11, 11)">
                                        <g id="Group-12" transform="translate(7.4929, 7.5322)">
                                            <g id="Group-11" transform="translate(0, 0)">
                                                <path d="M1.5,0 C2.32842712,-1.52179594e-16 3,0.671572875 3,1.5 L3,2.5 C3,3.32842712 2.32842712,4 1.5,4 C0.671572875,4 5.07265313e-17,3.32842712 0,2.5 L0,1.5 C-1.01453063e-16,0.671572875 0.671572875,1.01453063e-16 1.5,0 Z" id="Rectangle" fill="#DA946D" />
                                                <line x1="1.50708096" y1="2.6792992" x2="1.50708096" y2="7.53219842" id="Path-18" stroke="#DA946D" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <g id="Group-11-Copy-2" transform="translate(5.5, 3.7661) rotate(-180) translate(-5.5, -3.7661)translate(4, 0)">
                                                <path d="M1.5,0 C2.32842712,-1.52179594e-16 3,0.671572875 3,1.5 L3,2.5 C3,3.32842712 2.32842712,4 1.5,4 C0.671572875,4 5.07265313e-17,3.32842712 0,2.5 L0,1.5 C-1.01453063e-16,0.671572875 0.671572875,1.01453063e-16 1.5,0 Z" id="Rectangle" fill="#DA946D" />
                                                <line x1="1.50708096" y1="2.6792992" x2="1.50708096" y2="7.53219842" id="Path-18" stroke="#DA946D" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg></div> <span>Treatment Orientations</span>
                    </Link>
                    </li>
                    <li><Link href="#" className='nav_link'><div className="left-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="10px" height="10px" viewBox="0 0 10 10" version="1.1">
                        <title>Group 5</title>
                        <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                            <g id="07---Mind-Collab-Collective---Profile-Page" transform="translate(-25, -527)" stroke="#E1906C" strokeWidth="2">
                                <g id="Group-Copy-6" transform="translate(8, 510)">
                                    <g id="Group-4-Copy-6" transform="translate(11, 11)">
                                        <g id="Group-10" transform="translate(7.2249, 7.0833)">
                                            <line x1="0.0218711232" y1="0.5" x2="3.18312835" y2="0.5" id="Path-13" />
                                            <line x1="0.0218711233" y1="3.91666667" x2="0.978128877" y2="3.91666667" id="Path-14" />
                                            <line x1="0.0218711232" y1="7.05707262" x2="6.8734884" y2="7.05707262" id="Path-15" />
                                            <polyline id="Path-3" points="3.77516072 3.31818495 4.44099593 3.98402016 6.44099593 1.98402016" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg></div>  <span>Submit Blog Article</span>
                    </Link>
                    </li>
                    <li><Link href="#" className='nav_link'><div className="left-icon"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="7px" height="12px" viewBox="0 0 7 12" version="1.1">
                        <title>Group 3</title>
                        <g id="Design" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g id="07---Mind-Collab-Collective---Profile-Page" transform="translate(-27, -574)" fill="#DC9873">
                                <g id="Group-3" transform="translate(27, 574)">
                                    <path d="M4.3714351,10.3080241 L4.3714351,11.1489673 C4.3714351,11.61879 3.98361812,12 3.50510201,12 L3.50510201,12 C3.0265859,12 2.63832212,11.61879 2.63832212,11.1489673 L2.63832212,10.3106562 C1.77958452,10.2584537 1.07409718,9.95006397 0.552242074,9.29511972 C0.191679513,8.84152806 0,8.28967282 0.0111748354,7.73869494 L1.71748019,7.73869494 C1.93194119,8.42083714 2.15042334,8.57788339 2.88718625,8.57788339 C3.36391518,8.57788339 3.84019733,8.5813928 4.31647947,8.57700603 C4.8584403,8.57218059 5.24849125,8.21071102 5.24938484,7.71983184 C5.25027842,7.22895266 4.86022747,6.86836045 4.31960703,6.85914824 C3.62082159,6.84774264 2.9122067,6.90257723 2.2245911,6.8091391 C0.862763735,6.62357887 -0.0513762905,5.48521294 0.00223896028,4.15470663 C0.054067036,2.86894535 1.10045801,1.82314019 2.44888157,1.70864559 C2.4966885,1.70425882 2.54449543,1.69987205 2.62089717,1.69285323 L2.62089717,0.850594041 C2.62089717,0.38077134 3.00871415,0 3.48723026,0 L3.49527255,0 C3.97423545,0 4.36205244,0.38077134 4.36205244,0.850594041 L4.36205244,1.68978249 C5.22257721,1.73803692 5.92717096,2.04862 6.44768569,2.70531895 C6.8051207,3.15583988 6.98517858,3.66953025 6.99902919,4.26130506 L5.28244757,4.26130506 C5.06709298,3.57784683 4.8508448,3.42211661 4.11274152,3.42211661 C3.63645938,3.42211661 3.16017723,3.41904588 2.68389509,3.42299397 C2.14327464,3.42738073 1.75143652,3.78972765 1.75054293,4.27929081 C1.74964934,4.7679766 2.14193426,5.13163955 2.67987394,5.14041309 C3.37910617,5.15225736 4.08772107,5.09654542 4.77488987,5.19042223 C6.13761082,5.37598245 7.05219764,6.51478706 6.9976888,7.84485469 C6.94496714,9.13193201 5.90393769,10.1733504 4.55149299,10.2913544 C4.50368606,10.2953025 4.45632592,10.3001279 4.3714351,10.3080241" id="Fill-1" />
                                </g>
                            </g>
                        </g>
                    </svg></div> <span>Donate</span>
                    </Link>
                    </li>
                </ul>

            </div>

        </>
    )
}

export default Sidebar;