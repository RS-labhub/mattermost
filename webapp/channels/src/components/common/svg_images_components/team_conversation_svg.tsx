// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

const TeamConversation = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={155}
        height={128}
        fill='none'
    >
        <ellipse
            cx={41.246}
            cy={55.851}
            fill='#fff'
            rx={40.585}
            ry={40.51}
        />
        <path
            stroke='#3F4350'
            strokeOpacity={0.16}
            strokeWidth={0.611}
            d='M41.246 96.666c22.582 0 40.89-18.273 40.89-40.815 0-22.543-18.307-40.816-40.89-40.816-22.583 0-40.89 18.273-40.89 40.816 0 22.542 18.307 40.815 40.89 40.815Z'
        />
        <ellipse
            cx={41.246}
            cy={55.851}
            fill='#3F4350'
            fillOpacity={0.16}
            rx={40.585}
            ry={40.51}
        />
        <mask
            id='team_conversation_a'
            width={82}
            height={82}
            x={0}
            y={15}
            maskUnits='userSpaceOnUse'
            style={{
                maskType: 'alpha',
            }}
        >
            <ellipse
                cx={41.246}
                cy={55.851}
                fill='#fff'
                rx={40.585}
                ry={40.51}
            />
        </mask>
        <g mask='url(#team_conversation_a)'>
            <path
                fill='#FFBC1F'
                d='M23.99 47.517h11.263l.395-6.276c.649-.193 2.119-1.463 2.535-1.634 1.751-.7 3.62-10.423 3.063-11.833-.71-1.576-5.664.828-8.143.04-2.282-.727-5.274 2.299-5.41 5.745L23.99 47.517Z'
            />
            <ellipse
                cx={39.052}
                cy={31.764}
                fill='#6F370B'
                rx={0.658}
                ry={0.657}
            />
            <path
                fill='#fff'
                d='M53.75 95.222a43.852 43.852 0 0 1-15.036 2.636c-3.027 0-5.984-.306-8.84-.889-9.39-1.918-17.691-6.819-23.864-13.668-.11-3.29-.119-7.143.017-11.65.82-26.736 2.519-25.43 25.966-25.606 26.51-.197 22.885 10.962 23.227 20.356.22 5.982-.561 19.716-1.47 28.82Z'
            />
            <path
                fill='#FFBC1F'
                d='M27.965 52.299c1.662.617 6.098.328 7.015-.999.632-.92 1.233-1.865 1.852-2.794.495-.748.983-1.497 1.456-2.26a73.12 73.12 0 0 0-6.296-.2c-3.106.021-5.822.021-8.213.06 2.29 2.532 1.005 5.015 4.186 6.193ZM55.216 60.519c-.82.057-1.628.184-2.387.311-3.905.661-1.773 1.927-1.628 16.318.075 7.274 1.347 11.421.58 18.687 0 .017-.01.03-.01.048.667-.206 1.33-.425 1.984-.666.908-9.105 1.689-22.838 1.47-28.82-.07-1.923.026-3.92 0-5.882l-.01.004ZM44.918 90.492c-.162 4.506-.601 3.766-4.33 1.344-2.874-1.865-7.714 2.729-14.778 4.095a43.892 43.892 0 0 1-15.777-8.706c-3.04-7.41-3.668-17.636-3.668-23.443 0-.583 13.79.749 13.79.749-.08 10.54.978 22.843 9.718 21.288 8.74-1.55 15.212.166 15.045 4.673Z'
            />
            <path
                fill='#484D5B'
                d='M80.497 67.658c-5.756 17.535-22.289 30.2-41.783 30.2a44.22 44.22 0 0 1-8.84-.889v-3.875h13.561s6.586-24.998 6.525-25.436h30.537Z'
            />
            <path
                fill='#6C7389'
                d='M64.245 67.658H49.96c.027.197-1.316 5.47-2.794 11.163a3090.577 3090.577 0 0 0 17.08-11.163ZM56.681 78.177c3.861-2.4 7.731-4.787 11.619-7.143 1.75-1.06 3.444-2.238 5.16-3.376h-6.02c-6.963 4.576-13.926 9.148-20.924 13.672-.338 1.305-.676 2.597-.996 3.823 3.72-2.325 7.436-4.66 11.161-6.976Z'
            />
            <path
                fill='#6F370B'
                d='M43.027 24.266c-.912-1.204-2.303-.315-3.755.101-3.067 1.3-6.968-.92-9.802.828-2.172 1.335-2.55 4.274-2.703 6.819-.066 1.116.119 2.588 1.22 2.811.377.075.777-.035 1.15.053 1.052.24 1.18 1.66 1.17 2.737-.012 1.861.317 3.797 1.418 5.299 1.097 1.502 3.106 2.448 4.883 1.883 2.11-.67 3.111-3.026 3.77-5.133.385-1.248 1.373-3.363.214-3.972-1.241-.657-4.545.955-6.13-.118-1.074-.731-1.013-2.308-.833-3.595.123-.885.277-1.831.9-2.47 1-1.034 2.667-.81 4.106-.763 1.312.049 2.712-.148 3.73-.98 1.018-.833 1.46-2.453.667-3.495l-.005-.005Z'
            />
            <path
                fill='#FFBC1F'
                d='M40.491 30.253c1.084 3.118 1.764 5.347 1.764 5.347-.171.994-3.339-.026-3.339-.026l1.575-5.321ZM32.107 30.253s-2.304-.653-2.23 1.515c.075 2.168 2.598 1.695 2.598 1.695l-.364-3.21h-.004Z'
            />
        </g>
        <path
            fill='#FFBC1F'
            d='M90.766 11.64H60.182a4.255 4.255 0 0 0-3.022 1.244 4.286 4.286 0 0 0-1.26 3.025v19.51a4.298 4.298 0 0 0 1.26 3.026 4.267 4.267 0 0 0 3.022 1.244h4.513v7.304l6.77-7.304h19.29a4.255 4.255 0 0 0 3.022-1.244 4.284 4.284 0 0 0 1.26-3.025V15.909a4.292 4.292 0 0 0-1.256-3.021 4.26 4.26 0 0 0-3.015-1.249Z'
        />
        <path
            fill='#CC8F00'
            d='M71.466 39.69h19.289a4.255 4.255 0 0 0 3.022-1.245 4.284 4.284 0 0 0 1.26-3.025V23.575S93.69 34.528 93.45 35.492c-.242.964-.723 2.407-2.997 2.646-2.275.24-18.986 1.551-18.986 1.551Z'
        />
        <path
            fill='#fff'
            d='M65.028 22.875c.545 0 1.078.162 1.53.466a2.763 2.763 0 0 1 1.172 2.839 2.768 2.768 0 0 1-.754 1.416 2.752 2.752 0 0 1-3.002.6 2.772 2.772 0 0 1 0-5.111c.334-.14.692-.21 1.054-.21ZM75.474 22.875c.545 0 1.078.162 1.53.466a2.763 2.763 0 0 1 1.172 2.839 2.768 2.768 0 0 1-.754 1.416 2.752 2.752 0 0 1-3.002.6 2.772 2.772 0 0 1 0-5.111c.334-.14.692-.21 1.054-.21ZM85.91 22.875a2.748 2.748 0 0 1 2.547 1.705 2.776 2.776 0 0 1-.595 3.015 2.752 2.752 0 0 1-3.003.6 2.773 2.773 0 0 1-.004-5.11c.334-.138.692-.21 1.054-.21Z'
        />
        <path
            fill='#FFD470'
            d='M59.074 19.809a8.713 8.713 0 0 1 1.545-3.035c.71-.9 1.59-1.65 2.59-2.206a.3.3 0 0 0 .157-.332.301.301 0 0 0-.28-.237c-1.929-.116-5.821.297-4.6 5.78a.304.304 0 0 0 .588.03Z'
        />
        <ellipse
            cx={121.234}
            cy={92.692}
            fill='#fff'
            rx={32.766}
            ry={32.706}
        />
        <path
            stroke='#3F4350'
            strokeOpacity={0.16}
            strokeWidth={0.611}
            d='M121.234 125.704c18.264 0 33.072-14.78 33.072-33.012s-14.808-33.01-33.072-33.01c-18.265 0-33.072 14.778-33.072 33.01s14.807 33.012 33.072 33.012Z'
        />
        <ellipse
            cx={121.234}
            cy={92.692}
            fill='#3F4350'
            fillOpacity={0.16}
            rx={32.766}
            ry={32.706}
        />
        <mask
            id='team_conversation_b'
            width={66}
            height={67}
            x={88}
            y={59}
            maskUnits='userSpaceOnUse'
            style={{
                maskType: 'alpha',
            }}
        >
            <ellipse
                cx={121.234}
                cy={92.692}
                fill='#fff'
                rx={32.766}
                ry={32.706}
            />
        </mask>
        <g mask='url(#team_conversation_b)'>
            <path
                fill='#fff'
                d='M128.868 77.312c-1.879 0-3.518.075-4.945.236-10.78 1.212-6.629 6.128-8.108 20.023-1.673 15.737-5.15 25.312 11.466 26.942 16.616 1.631 19.045-8.048 20.434-25.973 1.39-17.922-2.429-21.228-18.847-21.228Z'
            />
            <path
                fill='#82889C'
                d='M120.837 114.063s.009 4.244-1.263 8.591a20.434 20.434 0 0 1-1.161 3.098h-16.048a101.205 101.205 0 0 0 1.835-24.376c-.02-.525-.847-.525-.823 0a100.576 100.576 0 0 1-1.852 24.376h-13.57c.325-.304.078-27.046 8.125-36.713a11.345 11.345 0 0 1 2.214-2.058c5.606-3.96 9.619-2.408 13.031 2.699.729 1.088 1.429 2.337 2.112 3.734 1.482 3.032 2.881 6.738 4.293 10.925.646 1.926 1.3 3.956 1.967 6.068.165.53.334 1.064.502 1.606l.638 2.05Z'
            />
            <path
                fill='#3F4350'
                d='M108.506 125.751h-6.981a100.568 100.568 0 0 0 1.852-24.375c-.025-.526.634-.493.823 0 2.968 7.741 5.899 16.36 4.306 24.375Z'
            />
            <path
                fill='#A4A9B7'
                d='M145.904 113.562c.198 4.543.469 9.091-.058 12.189h-43.082c1.885-3.964 5.45-6.323 10.397-9.351 2.103-1.281 4.458-2.691 7.039-4.387.209-.144.424-.284.638-.428 0 0 .168-.078.477-.217 3.569-1.611 26.017-11.303 24.832.209v.008c-.07.686-.272 1.34-.243 1.977Z'
            />
            <path
                fill='#3F4350'
                d='M145.9 125.394c.449-3.085.194-7.457 0-11.832-.029-.637.173-1.29.243-1.976v-.008c1.181-11.475-21.115-1.882-24.795-.226 6.112 7.814 14.74 13.204 24.548 14.042h.004Z'
            />
            <path
                fill='#fff'
                d='M124.016 77.665c-6.83.576-24.32-.886-26.945 7.078-2.39 7.242 5.291 6.244 7.377 11.487 2.082 5.242 2.201 9.57 4.168 4.903 1.966-4.667-.362-10.61-1.341-13.173-.976-2.563 7.628 5.243 12.993 2.448 5.365-2.796 3.748-12.743 3.748-12.743Z'
            />
            <path
                fill='#A37200'
                d='M97.987 83.09a6.023 6.023 0 0 0-.917 1.731c-2.387 7.212 5.285 6.218 7.369 11.438 2.08 5.221 2.199 9.53 4.163 4.883 1.965-4.647-.361-10.565-1.34-13.117-1.249-4.445-6.875-5.443-9.275-4.936Z'
            />
            <path
                fill='#3F4350'
                fillOpacity={0.64}
                d='M139.877 88.991c-.061-.516-.596-.472-.56.053 1.002 13.535-5.154 17.615-5.154 17.615 6.034-3.413 6.541-10.837 5.714-17.668ZM116.218 84.323c-.273 1.467-.935 3.41-.814 4.947.044.554.369 1.059.421 1.63.092.954.216 3.075.168 4.042-.024.534.81-3.509.249-5.188-.534-1.597.236-3.518.553-5.206.097-.52-.481-.742-.577-.22v-.005Z'
            />
            <path
                fill='#3F4350'
                d='M115.955 106.305h-3.962a1.2 1.2 0 0 1-1.117-.733l-2.837-6.857c-.319-.765.264-1.603 1.116-1.603h3.963c.491 0 .936.289 1.116.732l2.838 6.857c.319.765-.265 1.604-1.117 1.604Z'
            />
            <path
                fill='#A37200'
                d='M135.79 77.67c12.256.915 15.376 4.59 15.376 18.357 0 21.408-12.704 23.333-22.284 19.011-9.581-4.319-14.872-8.198-16.678-11.585-1.457-2.729 1.773 0 5.488.743.932.185 1.777.694 2.639.928 19.518 5.304 22.1-2.631 20.984-11.987-1.117-9.355-5.521-15.472-5.521-15.472l-.004.005Z'
            />
            <path
                fill='#fff'
                d='M135.819 77.665s3.312 5.086 4.431 14.446c.766 6.433-3.056 13.445-6.153 14.469-.082 3.321-.844 6.618-2.413 9.5 9.069 2.747 19.482-.657 19.482-20.055 0-13.77-3.114-17.444-15.351-18.36h.004Z'
            />
            <path
                fill='#000'
                fillOpacity={0.2}
                d='M94.279 124.378H73.887a1.38 1.38 0 0 1-.847-.405 1.413 1.413 0 0 1-.4-.858V96.298a1.4 1.4 0 0 1 1.26-1.276h15.122l6.548 6.556v21.524a1.196 1.196 0 0 1-.346.872c-.256.247-.592.39-.945.404Z'
            />
        </g>
        <path
            fill='#A37200'
            d='m123.599 73.532 3.552 6.255c2.686-.28 4.595-1.641 7.294-1.732-1.504-1.866-5.582-8.49-5.994-9.014-.771-.98.108-3.602-.384-4.442-1.765-3.078-6.45-1.294-7.521-1.034-1.037.247-3.031 1.475-3.031 1.475.716 2.295 2.253 5.95 4.327 8.624.349.453 1.032.214 1.757-.132Z'
        />
        <path
            fill='#A37200'
            d='M119.071 67.059c-.535 2.26-.848 3.875-.848 3.875.213.743 2.479.129 2.479.129l-1.631-4.004Z'
        />
        <path
            fill='#6F370B'
            d='M123.75 73.472c.535-.293.849-.569 1.264-1.034.187-.213.348.063.276.339-.055.212-.348.533-.734.723-.246.122-1.166.171-.806-.028Z'
        />
        <path
            fill='#4A2407'
            d='M131.793 65.593c-.545-.477-1.248-.857-1.511-1.526-.233-.6-.045-1.274-.17-1.902-.217-1.082-1.374-1.808-2.497-1.825-1.124-.016-4.2 1.151-5.394 1.184-1.195.029-2.397-.073-3.575.127-1.178.2-2.364.759-2.951 1.78-.587 1.02-.325 2.534.745 3.048.899.433 1.981.061 2.83-.457.849-.519 1.632-1.196 2.601-1.437.97-.24 2.219.188 2.402 1.151.104.551-.163 1.098-.246 1.653-.083.555.154 1.27.72 1.322.645.062 1.153-.78 1.777-.616.554.147.591.878.704 1.424.262 1.294 1.643 2.237 2.984 2.127 1.34-.11 2.505-1.188 2.805-2.478.299-1.29-.225-2.697-1.228-3.579l.004.004Z'
        />
        <path
            fill='#4A2407'
            d='M145.664 74.119c.454-.927.442-1.861.442-2.874 0-.319.062-.592.165-.836a7.912 7.912 0 0 1-.083-.815c-.053-1.129.257-2.365 1.153-3.052.393-.302.872-.484 1.211-.84.665-.706.554-1.84.24-2.758-.62-1.82-1.885-3.424-3.533-4.413-1.649-.988-3.678-1.344-5.554-.926-1.029.228-1.996.674-3.016.939-1.021.265-2.157.327-3.079-.186-.987-.546-4.008-1.48-5.136-1.53-10.103-.439-12.123 5.583-12.702 6.39-.653.818 9.888-1.965 11.02-1.345.649-.947.133 7.34 1.058 8.726.657.985 3.029 4.202 7.339 5.77 2.549.285 5.128.43 7.574-.27.839-.24 1.686-.653 2.467-1.186.153-.257.301-.521.438-.794h-.004Z'
        />
        <path
            fill='#A37200'
            d='M129.191 81.907c2.916-.062 5.153-1.873 6.389-4.316-1.967-.201-4.204-.279-6.75-.279-1.88 0-3.511.078-4.939.238.936 2.406 2.246 4.423 5.296 4.357h.004Z'
        />
        <path
            fill='#FFBC1F'
            d='M111.923 86.26a154.48 154.48 0 0 0-.733 8.382c-.037.66 1.095.568 1.133-.082.163-2.708.401-5.41.713-8.109.072-.652-1.035-.85-1.113-.191ZM121.057 90.752a44.426 44.426 0 0 1-4.63 5.339c-.468.458.21 1.228.677.77a46.446 46.446 0 0 0 4.798-5.544c.392-.53-.458-1.096-.845-.565ZM126.68 100.896c-2.387-.091-4.78-.186-7.167-.276-.549-.019-.47 1.01.075 1.034 2.387.091 4.78.186 7.167.276.549.019.47-1.009-.075-1.034Z'
        />
        <path
            fill='#4A2407'
            d='M121.244 72.848a3.714 3.714 0 0 0 1.203-.57c.149-.11-.007-.35-.158-.242-.37.269-.789.46-1.231.564l.186.248Z'
        />
        <ellipse
            cx={120.603}
            cy={68.1}
            fill='#4A2407'
            rx={0.612}
            ry={0.407}
            transform='rotate(-13.871 120.603 68.1)'
        />
        <path
            fill='#FFBC1F'
            d='M82.739 119.947c-.657 1.003-2.139 1.148-3.292.336l-13.015-9.15a1.982 1.982 0 0 1-.582-2.682l11.45-17.46a2.345 2.345 0 0 1 2.835-.756l14.775 6.488c1.306.576 1.849 1.846 1.199 2.865l-13.37 20.359Z'
        />
        <path
            fill='#fff'
            d='m80.668 118.76-13.416-9.155 11.8-17.991 14.952 6.814-13.336 20.332Z'
        />
        <path
            fill='#8D93A5'
            d='M89.162 97.151a.802.802 0 0 1-.99.216L82.53 94.72a.52.52 0 0 1-.262-.766l.885-1.35a.755.755 0 0 1 .925-.228l5.717 2.535a.555.555 0 0 1 .308.809l-.94 1.43Z'
        />
        <path
            fill='#2D3039'
            d='m88.083 95.398-3.637-1.65.897-1.368a.776.776 0 0 1 .925-.231l2.42 1.046a.542.542 0 0 1 .307.794l-.912 1.409Z'
        />
        <path
            fill='#3DB887'
            d='M88.349 102.815 80.8 98.948l.394-.603 7.576 3.827-.422.643ZM78.421 98.554a.14.14 0 0 1-.206-.071l-.463-1.366a.148.148 0 0 1 .124-.188l.175-.037a.204.204 0 0 1 .228.117l.247.714a.136.136 0 0 0 .203.07l1.4-.787a.222.222 0 0 1 .265.05l.11.132a.141.141 0 0 1-.04.221l-2.043 1.145Z'
        />
        <path
            fill='#BABEC9'
            d='m85.88 106.577-7.4-4.092.397-.606 7.425 4.055-.423.643ZM77.062 102.627l-2.182-1.224 1.258-1.923 2.21 1.187-1.286 1.96ZM83.41 110.342l-7.248-4.322.395-.606 7.276 4.286-.422.642ZM74.763 106.134l-2.139-1.295 1.26-1.922 2.167 1.258-1.288 1.959ZM80.942 114.105l-7.098-4.55.395-.603 7.125 4.51-.422.643ZM72.463 109.639l-2.095-1.363 1.263-1.92 2.12 1.323-1.288 1.96Z'
        />
        <path
            fill='#3F4350'
            fillOpacity={0.32}
            fillRule='evenodd'
            d='M98.948 33.708a.917.917 0 0 1 .993-.833c2.906.256 7.482 1.956 11.95 4.577 3.866 2.268 7.766 5.292 10.513 8.82l1.333-6.036a.916.916 0 1 1 1.79.396l-1.779 8.056a.916.916 0 0 1-1.092.697l-8.056-1.779a.917.917 0 1 1 .395-1.79l5.707 1.26c-2.539-3.144-6.107-5.912-9.738-8.042-4.364-2.56-8.667-4.111-11.183-4.333a.917.917 0 0 1-.833-.993ZM62.846 113.966a.917.917 0 0 1-.88.953c-2.496.099-6.544-.844-10.586-2.567-3.409-1.453-6.929-3.509-9.608-6.094l-.556 6.177a.917.917 0 0 1-1.826-.164l.74-8.217a.917.917 0 0 1 .994-.831l8.217.739a.916.916 0 1 1-.164 1.826l-5.783-.52c2.418 2.224 5.565 4.059 8.705 5.397 3.931 1.676 7.688 2.506 9.795 2.422a.916.916 0 0 1 .952.879Z'
            clipRule='evenodd'
        />
    </svg>
);
export default TeamConversation;
