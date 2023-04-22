import React from 'react'
import SearchBar from '@/components/SearchBar'
import styles from '../styles/ExercisePage.module.scss';
const exercises = () => {
  return (
    <div className={styles['exercise-page']}>
     	<svg className={styles['logo']} version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="auto" height="10rem" viewBox="0 0 300.000000 291.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.10, written by Peter Selinger 2001-2011
</metadata>
<g transform="translate(0.000000,291.000000) scale(0.100000,-0.100000)"
fill="#fff" stroke="none">
<path d="M1259 2753 c-13 -3 -6 -27 40 -138 30 -74 57 -132 59 -131 4 5 -69
259 -77 267 -3 3 -13 4 -22 2z"/>
<path d="M1490 2671 l0 -90 -52 -63 c-28 -35 -83 -98 -121 -140 -57 -65 -65
-78 -48 -78 27 0 28 -4 35 -111 l6 -86 -56 5 -57 5 7 -49 c11 -80 17 -104 26
-104 5 0 23 -13 40 -28 l31 -29 -10 -349 c-5 -192 -13 -359 -17 -371 -5 -20
-13 -23 -54 -23 -41 0 -55 -6 -105 -45 -32 -24 -68 -61 -80 -82 -21 -34 -22
-39 -8 -79 18 -53 26 -60 85 -68 43 -6 50 -4 73 18 32 32 43 33 55 1 27 -71
-85 -203 -194 -227 -22 -5 -59 -23 -80 -40 -26 -21 -63 -37 -110 -48 -61 -14
-79 -23 -116 -61 -60 -59 -101 -77 -134 -56 -65 43 -21 244 52 235 21 -2 28
-10 33 -38 8 -36 40 -70 68 -70 35 0 123 40 142 64 17 22 29 26 69 26 64 0 99
28 107 87 4 32 1 50 -13 70 -10 16 -25 41 -34 58 -8 16 -29 37 -46 47 -34 20
-173 43 -245 41 -84 -3 -180 -68 -224 -153 -8 -16 -27 -78 -41 -137 -32 -133
-40 -148 -40 -78 0 70 -25 106 -81 119 -49 10 -85 -10 -109 -61 -14 -27 -14
-39 -5 -59 10 -23 16 -25 54 -22 l42 3 3 -44 c6 -86 -32 -149 -149 -241 -28
-22 -49 -40 -47 -40 1 0 35 11 73 25 94 33 190 33 310 0 118 -33 144 -32 259
10 53 19 114 35 134 35 20 0 75 -14 122 -31 143 -52 210 -64 275 -50 30 7 68
23 83 36 15 12 32 22 37 22 16 0 45 65 45 102 0 53 -21 111 -53 142 -16 16
-32 29 -37 29 -4 0 7 -15 25 -33 52 -52 68 -136 40 -204 -17 -41 -31 -40 -15
1 14 39 12 111 -4 151 -12 29 -66 75 -87 75 -4 0 -19 -10 -34 -22 -24 -19 -25
-22 -10 -30 15 -9 15 -11 -1 -29 -20 -23 -76 -25 -94 -4 -15 18 -5 35 21 35
10 0 19 5 19 10 0 6 -6 10 -14 10 -8 0 -18 5 -21 11 -10 15 25 49 49 48 20 -2
20 -2 -1 -6 -12 -2 -27 -12 -35 -21 -11 -13 -11 -14 2 -6 8 5 31 14 50 21 32
10 33 12 13 18 -25 8 -30 21 -10 27 6 2 33 3 59 3 26 -1 45 2 42 6 -2 4 4 10
13 12 10 3 2 5 -17 6 -53 2 -16 21 41 21 32 0 55 -6 73 -21 27 -21 36 -14 14
10 -11 11 -7 13 22 7 25 -4 48 -20 82 -58 109 -122 116 -235 18 -303 -42 -29
-118 -55 -162 -55 -19 0 -27 -4 -22 -11 4 -7 23 -9 53 -5 128 18 210 50 276
107 19 17 35 27 35 23 0 -5 29 20 64 55 47 46 78 68 117 82 30 10 46 18 36 19
-10 0 -34 -7 -54 -15 -20 -8 -38 -13 -41 -10 -8 7 64 35 90 35 13 0 37 -7 53
-16 18 -9 25 -10 18 -3 -21 21 -15 29 15 18 37 -14 72 -49 72 -71 0 -11 4 -17
9 -14 21 14 30 -81 9 -102 -7 -7 -23 -13 -38 -13 -17 -1 -19 -3 -7 -6 9 -2 15
-9 12 -14 -9 -14 -48 -11 -82 6 -25 13 -29 20 -25 43 2 15 11 33 20 40 9 6 11
12 6 12 -17 0 -34 -23 -34 -48 0 -13 -4 -20 -10 -17 -16 10 -12 33 10 55 24
24 53 26 74 4 14 -13 16 -14 16 0 0 8 -5 18 -10 21 -6 4 -8 10 -5 15 10 16
-14 21 -53 11 -27 -8 -61 -33 -109 -80 -71 -70 -132 -101 -202 -101 -14 0 -33
-5 -41 -11 -11 -7 9 -8 70 -3 117 10 237 5 288 -12 61 -20 108 -18 190 11 88
31 143 31 234 4 127 -39 283 -14 368 60 l25 21 -30 -7 c-16 -5 -65 -8 -107 -7
-64 0 -87 5 -137 30 -45 23 -57 26 -50 13 13 -25 107 -69 148 -70 l36 -1 -33
-11 c-75 -24 -191 31 -208 98 -14 56 54 119 71 66 6 -21 58 -41 106 -41 40 0
83 61 76 107 -15 87 -68 123 -185 123 -111 0 -171 -30 -202 -100 -8 -20 -10
-13 -6 37 5 72 31 126 64 131 12 2 22 -2 22 -8 0 -6 16 -18 36 -26 48 -20 96
-5 124 40 20 34 27 100 11 110 -5 3 -14 25 -20 50 -18 71 -114 141 -209 153
-69 8 -182 -28 -217 -69 -14 -17 -29 -44 -32 -59 -6 -33 -18 -45 -54 -51 -26
-5 -26 -4 -17 28 22 82 -72 166 -191 171 -69 2 -124 -15 -147 -45 -12 -15 -14
-12 -15 28 0 25 -2 65 -4 90 -2 25 -8 204 -15 398 l-11 352 28 30 c15 17 33
30 40 30 12 0 17 20 29 104 l7 49 -57 -5 -57 -5 6 76 c9 110 12 121 36 121 17
0 10 13 -42 71 -35 39 -90 103 -121 142 l-58 71 0 88 c0 52 -4 88 -10 88 -6 0
-10 -36 -10 -89z m-26 -163 c-52 -105 -109 -198 -122 -198 -18 0 -19 -2 62
123 69 108 90 134 60 75z m136 -79 c39 -61 69 -114 65 -117 -10 -11 -37 26
-91 125 -29 54 -54 92 -54 85 0 -12 31 -145 46 -194 4 -12 0 -18 -10 -18 -9 0
-16 3 -16 6 0 4 -7 49 -16 100 -14 83 -14 124 0 124 2 0 36 -50 76 -111z
m-125 -24 c-13 -68 -21 -95 -32 -95 -9 0 -12 6 -9 18 3 9 15 57 27 107 28 113
36 95 14 -30z m-79 -115 c23 0 24 -2 21 -72 -1 -40 0 -80 3 -88 4 -11 -3 -14
-30 -11 -19 1 -36 4 -37 5 -2 1 -6 42 -9 91 -7 81 -6 88 10 82 10 -4 29 -7 42
-7z m267 -16 c-1 -10 -5 -49 -8 -86 -6 -57 -10 -68 -25 -68 -10 0 -25 -2 -33
-6 -12 -4 -14 11 -15 85 l-1 90 32 4 c45 5 52 3 50 -19z m-105 4 c-3 -8 -23
-12 -54 -11 -27 1 -38 -1 -24 -3 72 -13 68 -8 67 -82 l0 -68 -48 0 c-26 1 -43
4 -37 7 6 4 6 9 1 12 -13 8 -14 97 -1 97 5 0 7 -4 3 -9 -3 -5 0 -13 6 -17 7
-4 9 -3 6 3 -4 6 4 11 18 11 14 0 22 -5 18 -11 -3 -6 -1 -7 6 -3 6 4 9 12 6
17 -4 5 0 9 7 9 8 0 5 5 -5 11 -11 6 -31 9 -46 6 -23 -5 -27 -2 -29 19 -2 23
1 24 54 24 39 0 54 -4 52 -12z m-298 -228 c0 -22 -4 -40 -10 -40 -5 0 -10 18
-10 40 0 22 5 40 10 40 6 0 10 -18 10 -40z m50 -6 c0 -27 -4 -43 -10 -39 -5 3
-10 24 -10 46 0 21 5 39 10 39 6 0 10 -21 10 -46z m100 -5 c0 -32 -3 -39 -20
-39 -17 0 -20 7 -20 38 0 43 6 53 26 45 9 -3 14 -20 14 -44z m170 0 c0 -32 -3
-39 -20 -39 -17 0 -20 7 -20 39 0 36 14 55 33 44 4 -2 7 -22 7 -44z m131 14
l2 -38 7 40 7 40 2 -45 c1 -39 -2 -46 -19 -47 -17 -2 -20 4 -20 43 0 53 19 60
21 7z m49 -3 c0 -22 -4 -40 -10 -40 -5 0 -10 18 -10 40 0 22 5 40 10 40 6 0
10 -18 10 -40z m-300 -10 c0 -28 -4 -40 -14 -40 -9 0 -15 14 -18 40 -3 33 0
40 14 40 14 0 18 -8 18 -40z m62 0 c-3 -30 -8 -40 -22 -40 -14 0 -19 10 -22
40 -3 37 -2 40 22 40 24 0 25 -3 22 -40z m132 -2 c3 -18 16 -42 28 -55 l22
-23 -21 -22 c-19 -18 -24 -19 -38 -8 -9 7 -13 20 -10 28 3 8 0 29 -6 47 -12
33 -7 65 9 65 5 0 12 -14 16 -32z m-172 -52 c95 -1 128 -4 128 -13 0 -25 -369
-10 -378 15 -3 10 9 12 59 6 35 -4 121 -8 191 -8z m16 -48 c56 -2 102 -5 102
-8 0 -19 -31 -30 -85 -30 -113 0 -191 12 -216 32 l-24 19 60 -6 c33 -3 106 -6
163 -7z m160 -49 c-12 -4 -35 -7 -50 -8 l-26 -1 0 -87 c1 -80 3 -90 25 -110
21 -20 24 -30 21 -85 -3 -57 -5 -63 -24 -60 -19 2 -20 -3 -21 -88 -1 -70 2
-90 13 -90 21 0 34 -34 34 -94 0 -52 -2 -56 -24 -56 -18 0 -23 -5 -23 -25 0
-24 2 -25 36 -19 20 3 45 8 56 11 17 4 18 3 7 -8 -10 -10 -49 -14 -150 -15
-95 -1 -120 0 -82 5 l55 8 -46 1 c-26 1 -62 4 -80 7 -30 4 -31 4 -9 -5 20 -8
18 -9 -15 -4 -22 3 -42 9 -45 12 -3 4 -3 104 0 222 l5 215 6 -155 c3 -85 4
-22 2 140 l-4 295 181 0 c100 0 171 -3 158 -6z m2 -121 c0 -86 -1 -91 -17 -76
-20 21 -30 117 -14 147 22 41 31 21 31 -71z m14 -220 c-4 -6 -6 -63 -5 -127
l2 -116 -27 54 c-23 48 -25 60 -17 97 9 37 8 41 -6 36 -11 -3 -7 5 9 24 34 39
60 59 44 32z m-4 -290 c29 -31 25 -46 -5 -18 -23 21 -32 40 -20 40 2 0 13 -10
25 -22z m-183 -122 c83 -1 113 -4 113 -13 0 -26 -286 -10 -314 17 -20 20 6 27
46 13 28 -10 83 -16 155 -17z m-217 -11 c10 -12 9 -15 -8 -15 -11 0 -22 4 -24
9 -1 5 -16 3 -33 -5 -16 -8 -22 -12 -12 -9 9 2 31 2 47 -2 30 -5 30 -6 30 -69
0 -61 -9 -79 -27 -51 -4 6 -8 17 -8 22 0 21 -43 12 -58 -12 -4 -7 -21 -13 -36
-13 -18 0 -31 -7 -35 -16 -6 -15 -4 -15 10 -3 15 12 17 12 13 0 -3 -8 -14 -21
-26 -28 -18 -12 -23 -12 -37 2 -27 28 -32 66 -10 84 11 9 23 23 26 32 4 9 20
23 37 30 16 7 27 17 25 21 -4 6 75 36 102 37 6 1 17 -6 24 -14z m145 -27 l70
-2 -70 -6 -70 -6 88 -2 c49 -1 96 2 105 7 10 5 51 12 92 15 49 4 66 2 50 -3
-14 -5 -42 -9 -62 -10 -27 -1 -38 -6 -38 -16 0 -11 11 -15 40 -15 39 0 40 -1
40 -34 l0 -34 -82 -6 c-46 -4 -103 -7 -128 -9 -41 -2 -45 -4 -48 -29 -3 -23 1
-28 17 -28 20 0 21 -6 21 -95 l0 -95 -29 0 c-15 0 -40 -9 -54 -20 -30 -24 -89
-26 -111 -5 -8 8 -25 15 -38 15 l-22 0 20 15 c44 30 68 118 90 318 5 54 7 58
27 53 12 -3 54 -7 92 -8z m572 -72 c12 -15 25 -25 29 -24 4 2 16 -9 27 -24 16
-21 18 -35 13 -72 -5 -33 -12 -46 -23 -46 -9 0 -14 -3 -10 -6 12 -12 -19 -31
-51 -32 -41 -1 -67 34 -58 79 4 19 2 28 -5 24 -5 -4 -25 1 -44 10 -26 12 -40
13 -55 5 -23 -13 -40 -41 -40 -69 0 -25 -20 -28 -21 -3 0 9 -4 42 -9 72 -8 60
5 90 42 90 11 0 17 4 13 9 -7 12 52 20 119 16 40 -2 55 -8 73 -29z m487 -21
c20 -14 40 -25 45 -25 13 0 48 -44 56 -70 4 -14 14 -34 21 -45 8 -11 14 -35
14 -55 0 -80 -62 -106 -119 -49 -34 34 -38 55 -16 85 13 17 14 16 8 -17 -3
-20 -1 -39 4 -42 4 -3 8 17 8 44 0 27 -1 49 -3 49 -17 0 -85 -46 -109 -74 -43
-48 -58 -98 -58 -192 l0 -82 -36 29 c-20 16 -41 29 -47 29 -5 0 -24 13 -41 29
-16 15 -33 26 -36 23 -2 -3 -13 2 -22 10 -10 9 -28 19 -41 23 -23 7 -52 61
-52 99 0 33 29 68 53 64 17 -2 25 -14 34 -52 8 -33 27 -66 61 -104 54 -62 90
-84 49 -30 -94 123 -93 261 3 325 18 13 27 23 19 23 -8 0 -25 -8 -38 -17 -14
-9 -21 -11 -16 -4 16 27 89 51 156 51 54 0 73 -4 103 -25z m-1251 -2 c-6 -2
-21 -13 -34 -24 -12 -10 -29 -19 -38 -18 -12 0 -11 2 4 9 11 5 31 18 45 29 14
11 27 17 30 14 3 -3 0 -8 -7 -10z m477 -51 c0 -15 10 -47 21 -72 12 -25 27
-65 34 -89 15 -48 13 -53 -40 -83 -18 -10 -19 -10 -5 7 14 16 13 17 -7 11 -18
-6 -25 -1 -36 21 -27 53 -40 130 -28 165 26 75 61 97 61 40z m-90 -6 c0 -21
-5 -36 -14 -38 -10 -2 -8 -21 11 -96 32 -130 35 -134 86 -126 23 4 47 10 52
14 6 4 24 10 40 14 l30 7 -21 -19 c-12 -11 -48 -24 -87 -31 -66 -11 -68 -11
-102 16 -34 27 -35 31 -35 94 0 37 -3 81 -6 98 -6 27 -3 33 15 38 23 6 30 48
9 56 -8 3 -6 6 5 6 13 1 17 -7 17 -33z m-814 9 c22 -17 38 -19 29 -5 -4 7 2 9
17 6 12 -3 38 -7 57 -10 19 -4 44 -14 55 -24 10 -9 16 -11 12 -4 -4 7 -1 12 8
12 19 0 50 -45 41 -60 -3 -5 1 -13 10 -16 9 -4 14 -13 11 -20 -3 -8 -1 -25 4
-39 12 -33 -18 -72 -46 -60 -32 14 -43 14 -55 -1 -7 -9 -8 -14 -1 -14 6 0 13
5 15 10 3 6 4 5 3 -2 -2 -8 -17 -13 -39 -12 -21 0 -37 -3 -37 -8 0 -4 -7 -8
-14 -8 -8 0 -21 -12 -28 -27 -28 -58 -119 -50 -126 10 -4 36 22 77 50 77 19 0
19 -1 -6 -21 -19 -15 -26 -29 -25 -52 l1 -32 7 31 c11 43 19 54 42 54 35 0 4
38 -37 46 -54 10 -108 -11 -147 -57 -38 -44 -52 -88 -63 -193 -10 -95 -35
-116 -189 -151 -29 -6 -29 -6 17 43 60 64 93 130 124 250 53 198 128 287 218
254 29 -11 30 -10 11 4 -17 13 -18 16 -5 24 22 14 64 12 86 -5z m424 8 c0 -11
-64 -53 -80 -53 -9 0 -8 6 5 20 10 11 26 20 36 20 10 0 21 5 24 10 7 12 15 13
15 3z m370 -18 c0 -12 -17 -15 -90 -15 -73 0 -90 3 -90 15 0 12 17 15 90 15
73 0 90 -3 90 -15z m-103 -182 c-2 -27 -3 -5 -3 47 0 52 1 74 3 48 2 -27 2
-69 0 -95z m33 42 l-7 -90 -1 86 c-1 47 1 89 5 92 10 11 10 8 3 -88z m27 -42
c-2 -27 -3 -5 -3 47 0 52 1 74 3 48 2 -27 2 -69 0 -95z m329 103 c-7 -28 2
-39 43 -60 22 -12 44 -16 66 -12 32 6 33 5 39 -36 4 -23 14 -50 22 -59 14 -16
11 -18 -35 -24 -61 -8 -120 16 -182 75 -41 39 -49 72 -28 111 21 41 85 45 75
5z m-407 -103 c1 -18 -3 -33 -9 -33 -6 0 -9 33 -9 83 2 77 2 79 9 32 5 -27 9
-65 9 -82z m-1081 -60 c6 -9 9 -26 6 -36 -4 -13 -2 -17 5 -13 7 5 11 -8 11
-41 0 -48 -36 -143 -59 -157 -14 -9 -14 -5 4 37 20 49 19 110 -3 137 -16 20
-19 21 -31 6 -16 -19 -31 -20 -55 -3 -15 11 -16 15 -3 40 8 16 23 35 33 43 23
18 74 10 92 -13z m845 -15 c15 -7 27 -16 27 -19 0 -4 -16 -19 -35 -33 -19 -15
-35 -36 -35 -46 0 -10 -4 -22 -10 -25 -5 -3 -10 -21 -10 -40 0 -66 90 -89 149
-39 l31 26 0 -50 c0 -59 -5 -62 -93 -62 -72 0 -129 23 -196 77 -39 33 -51 37
-105 39 -34 1 -81 10 -105 20 l-45 18 60 17 c96 29 138 46 123 51 -22 7 39 34
96 43 27 4 58 13 69 21 25 17 44 18 79 2z m647 -21 l60 -34 -58 -46 c-33 -25
-65 -47 -72 -49 -6 -2 -25 20 -40 47 l-27 50 36 32 c20 18 37 32 38 33 2 0 30
-15 63 -33z m730 -18 c66 -15 106 -37 119 -65 17 -38 14 -54 -11 -54 -23 -1
-23 -1 -3 -16 20 -15 20 -15 1 -30 -30 -21 -72 -18 -90 8 -11 15 -16 18 -17 8
0 -8 -4 -4 -10 8 -5 13 -7 28 -3 33 6 11 -46 12 -64 1 -6 -5 -23 -23 -37 -42
-27 -37 -35 -114 -15 -151 13 -23 8 -24 -31 -3 -39 20 -59 68 -59 139 0 78 19
110 88 144 66 33 72 34 132 20z m-907 -26 c35 -37 57 -93 57 -143 l0 -41 33
33 c49 50 163 129 202 139 27 8 50 5 103 -11 69 -20 93 -37 106 -75 5 -13 -3
-9 -21 13 -32 37 -126 67 -178 58 -43 -8 -197 -127 -240 -186 -46 -62 -89 -92
-50 -34 19 28 25 50 25 91 0 65 -17 108 -59 151 -19 19 -27 32 -19 32 8 0 26
-12 41 -27z m-869 -108 c36 -18 65 -25 106 -25 49 0 63 -5 96 -31 76 -61 132
-83 211 -83 79 -1 86 -9 33 -40 -33 -20 -34 -20 -27 0 7 18 6 18 -7 2 -7 -10
-20 -18 -29 -18 -11 0 -14 5 -10 18 6 15 5 16 -11 2 -16 -13 -20 -12 -33 5 -7
11 -17 19 -21 18 -9 -3 -72 40 -72 50 0 4 -7 7 -15 7 -8 0 -15 4 -15 10 0 5
-3 9 -7 9 -21 -3 -34 2 -28 11 4 7 -2 9 -19 4 -16 -4 -26 -2 -26 5 0 8 -6 7
-21 -1 -17 -10 -23 -10 -26 -1 -3 9 -11 8 -30 -4 -25 -17 -26 -17 -18 7 7 23
5 22 -24 -9 -36 -38 -51 -36 -26 3 10 14 15 26 11 26 -3 0 -17 -17 -31 -38
-13 -21 -38 -46 -55 -55 -31 -19 -42 -9 -15 13 23 19 58 70 52 76 -3 3 -24
-21 -47 -53 -40 -56 -66 -80 -76 -70 -4 4 124 187 130 187 1 0 23 -11 50 -25z
m1037 -53 c-31 -33 -58 -57 -60 -55 -6 4 100 113 110 113 4 0 -19 -26 -50 -58z
m-465 -14 c-5 -24 -3 -29 9 -24 22 8 18 -6 -10 -36 -14 -15 -25 -31 -25 -36 0
-5 -10 -14 -22 -20 -13 -7 -34 -20 -48 -29 -14 -10 -3 8 25 39 28 32 52 58 55
58 3 0 4 26 2 57 -2 47 0 54 9 40 6 -11 8 -33 5 -49z m952 -31 c32 -49 36 -67
10 -51 -7 5 -21 8 -31 9 -9 0 -28 18 -42 40 -30 49 -34 31 -4 -19 12 -20 16
-36 10 -36 -6 0 -17 14 -26 30 -21 41 -29 38 -11 -5 15 -35 10 -45 -11 -24 -9
9 -10 6 -6 -11 5 -19 3 -22 -10 -17 -10 4 -16 2 -14 -5 3 -17 -72 -40 -108
-34 -16 4 -41 12 -55 19 -15 8 -34 11 -45 6 -11 -4 -40 -8 -65 -8 l-45 0 43
14 c23 7 50 19 58 26 10 9 18 9 22 2 12 -19 70 -43 103 -43 23 0 42 10 71 40
38 38 40 43 36 85 -5 41 -4 45 16 45 11 0 28 5 36 10 11 7 18 5 25 -6 6 -10
25 -39 43 -67z m-1778 28 c-9 -10 -9 -15 -1 -15 6 0 11 -5 11 -11 0 -6 -7 -8
-16 -5 -9 4 -23 1 -30 -5 -22 -18 -16 2 8 28 24 25 48 32 28 8z m435 -55 l40
-20 -40 7 c-22 5 -73 8 -113 8 -61 0 -70 2 -56 12 27 20 123 16 169 -7z m-364
-8 c-23 -43 -35 -46 -141 -32 -54 7 -122 10 -152 7 -44 -5 -50 -4 -33 6 13 8
68 12 157 12 96 0 141 4 149 13 19 18 31 15 20 -6z"/>
<path d="M1403 1843 c-9 -3 -13 -26 -13 -69 l0 -64 31 0 c24 0 30 3 25 16 -3
9 -6 37 -6 64 0 47 -11 62 -37 53z"/>
<path d="M1333 1785 c0 -33 2 -45 4 -27 2 18 2 45 0 60 -2 15 -4 0 -4 -33z"/>
<path d="M1567 1673 c-4 -3 -7 -33 -7 -65 0 -55 1 -58 25 -58 24 0 25 3 25 59
0 44 -4 60 -16 65 -19 7 -19 7 -27 -1z"/>
<path d="M1403 1513 c-9 -3 -13 -27 -13 -69 0 -65 0 -65 27 -62 26 3 27 4 24
63 -3 76 -7 81 -38 68z"/>
<path d="M1567 1344 c-4 -4 -7 -34 -7 -66 0 -56 1 -58 25 -58 25 0 26 1 23 62
-2 47 -7 64 -18 66 -9 1 -19 0 -23 -4z"/>
<path d="M1358 1025 c3 -18 11 -25 28 -25 19 0 24 5 24 25 0 21 -5 25 -29 25
-25 0 -28 -3 -23 -25z"/>
<path d="M1597 1029 c-3 -12 0 -22 8 -25 20 -8 35 4 35 27 0 26 -36 25 -43 -2z"/>
<path d="M1287 874 c-4 -27 -16 -67 -26 -88 -13 -25 -15 -33 -5 -25 18 15 47
111 42 141 -2 13 -7 2 -11 -28z"/>
<path d="M1835 980 c3 -5 -3 -10 -15 -10 -21 0 -70 -41 -70 -59 0 -5 13 3 28
19 16 16 46 32 66 35 30 6 44 2 79 -20 38 -25 40 -26 22 -5 -30 34 -129 70
-110 40z"/>
<path d="M2251 964 c-28 -20 -61 -88 -61 -129 0 -32 19 -109 25 -103 3 2 0 21
-6 43 -17 60 -3 120 38 166 39 43 40 47 4 23z"/>
<path d="M2405 888 c-58 -32 -126 -132 -124 -183 0 -13 5 -8 14 15 l13 35 -4
-55 -3 -55 8 46 c17 90 76 170 138 185 18 5 21 9 11 15 -17 11 -29 11 -53 -3z
m10 -17 c-33 -20 -76 -65 -93 -96 -6 -11 -12 -15 -12 -9 -1 28 96 124 124 124
6 0 -2 -8 -19 -19z"/>
<path d="M590 881 c-23 -23 -47 -66 -63 -110 -36 -96 -34 -115 2 -25 36 93 66
141 99 159 15 8 21 14 13 15 -8 0 -31 -17 -51 -39z"/>
<path d="M635 821 c-45 -21 -74 -49 -80 -79 -2 -11 -11 -34 -19 -51 -9 -16
-21 -65 -27 -108 -11 -83 -29 -126 -56 -142 -10 -6 -13 -11 -6 -11 14 0 63 57
63 73 0 7 5 43 10 80 16 112 64 185 141 216 13 5 17 10 9 10 -8 1 -30 -8 -48
-19 -19 -12 -31 -16 -27 -10 10 17 58 38 100 44 33 5 35 4 15 -4 -20 -8 -16
-9 20 -5 34 4 41 3 30 -6 -13 -9 -13 -10 0 -6 8 2 20 -3 26 -11 9 -12 11 -12
11 3 0 20 -52 45 -94 45 -15 0 -46 -9 -68 -19z"/>
<path d="M300 654 c-23 -12 -23 -14 -4 -14 11 0 25 5 31 11 7 7 17 3 32 -17
11 -15 21 -22 21 -17 0 10 -43 54 -51 52 -2 -1 -15 -7 -29 -15z"/>
<path d="M2510 619 c-14 -6 -35 -20 -47 -31 -17 -16 -23 -18 -24 -7 0 8 -9 -4
-20 -26 -20 -42 -23 -84 -8 -125 5 -17 7 -6 3 35 -2 34 -1 52 4 42 6 -15 10
-12 20 17 13 36 64 86 87 86 8 0 17 5 20 10 8 12 -2 12 -35 -1z"/>
<path d="M1716 2748 c-38 -124 -76 -261 -73 -264 2 -3 29 56 59 130 43 107 52
136 41 141 -21 7 -23 7 -27 -7z"/>
<path d="M958 2683 c-10 -3 -18 -7 -18 -10 0 -7 291 -307 302 -312 5 -1 -37
53 -94 121 -165 199 -171 206 -190 201z"/>
<path d="M1894 2532 c-71 -86 -131 -161 -133 -166 -4 -12 292 292 297 304 2 4
-6 10 -16 12 -15 4 -48 -29 -148 -150z"/>
<path d="M407 2458 c-2 -7 -6 -17 -8 -21 -2 -5 172 -45 386 -88 215 -44 404
-82 420 -86 17 -3 28 -3 25 0 -5 5 -797 207 -811 207 -4 0 -9 -6 -12 -12z"/>
<path d="M2175 2370 c-540 -137 -539 -139 13 -26 206 42 384 76 398 76 13 0
24 3 24 8 -1 15 -28 42 -41 40 -8 0 -185 -44 -394 -98z"/>
<path d="M945 2020 c-93 -27 -254 -70 -357 -97 l-186 -48 -4 -33 c-3 -27 -1
-32 11 -28 21 6 711 242 731 249 10 4 9 5 -5 5 -11 0 -96 -22 -190 -48z"/>
<path d="M2210 1945 c201 -67 373 -126 383 -130 14 -6 17 -2 17 27 0 33 -2 34
-57 47 -31 7 -198 51 -372 97 -173 46 -320 84 -325 83 -6 0 153 -56 354 -124z"/>
<path d="M1755 1815 c59 -95 539 -745 551 -745 8 0 14 2 14 4 0 3 -64 90 -143
193 -79 103 -205 271 -281 373 -139 186 -176 231 -141 175z"/>
<path d="M1238 1813 c-9 -10 -139 -182 -289 -383 -151 -201 -287 -382 -302
-402 -22 -29 -25 -38 -13 -38 18 0 32 19 366 480 133 184 247 341 253 348 15
19 2 14 -15 -5z"/>
<path d="M1740 1603 c0 -16 198 -483 211 -500 18 -21 31 -15 18 10 -7 12 -61
130 -121 262 -59 132 -108 235 -108 228z"/>
<path d="M1140 1348 c-132 -297 -129 -289 -103 -263 11 11 29 43 40 70 12 28
58 137 103 243 45 107 80 196 77 198 -2 3 -55 -109 -117 -248z"/>
<path d="M1610 585 c11 -21 21 -60 22 -85 l1 -45 7 50 c8 49 8 48 6 -17 0 -36
2 -64 7 -61 8 5 10 105 1 127 -3 9 -11 13 -17 9 -7 -4 -8 0 -3 13 4 10 4 15 0
12 -3 -4 -15 3 -25 15 -17 20 -17 18 1 -18z"/>
<path d="M1990 459 c-62 -42 -81 -60 -73 -72 3 -5 1 -7 -4 -4 -13 8 -96 -37
-86 -46 3 -4 0 -7 -7 -7 -7 0 -11 -3 -8 -6 11 -11 93 39 148 91 30 29 64 57
75 63 11 6 16 11 10 12 -5 0 -30 -14 -55 -31z"/>
<path d="M1670 442 c0 -32 -59 -92 -115 -118 -27 -13 -44 -23 -37 -23 24 -1
110 48 131 75 23 30 37 71 27 81 -3 4 -6 -3 -6 -15z"/>
<path d="M825 284 c-38 -14 -95 -31 -125 -38 -50 -11 -52 -13 -27 -19 15 -4
68 -2 119 4 119 14 179 6 313 -43 136 -50 240 -66 327 -50 72 13 166 57 218
101 l35 29 -75 -26 c-68 -24 -90 -26 -225 -27 -142 0 -156 2 -254 33 -73 22
-126 32 -175 33 l-71 1 40 13 40 13 -35 1 c-19 0 -66 -11 -105 -25z m371 -83
c15 12 19 2 6 -18 -5 -8 -12 -8 -26 2 -11 9 -15 18 -10 27 7 10 9 9 12 -5 3
-14 7 -16 18 -6z"/>
<path d="M2315 258 c-61 -25 -162 -27 -255 -4 -75 18 -187 21 -257 6 -58 -13
-307 -130 -276 -130 12 0 80 18 150 41 144 46 236 54 333 29 30 -8 96 -15 146
-15 86 0 94 2 168 40 51 26 90 40 116 40 21 0 33 3 27 7 -22 14 -102 7 -152
-14z"/>
<path d="M970 186 c19 -8 78 -36 130 -64 146 -77 184 -87 330 -87 l125 1 127
52 c140 58 219 77 282 67 36 -5 39 -4 21 7 -13 8 -54 13 -115 12 -81 0 -112
-6 -210 -38 -202 -65 -335 -68 -486 -10 -140 54 -199 73 -219 73 -13 0 -8 -5
15 -13z"/>
<path d="M2494 21 c-16 -16 39 -21 257 -21 153 0 249 4 249 10 0 9 -497 20
-506 11z"/>
</g>
</svg>
      <SearchBar/>
    </div>
  )
}

export default exercises