import React from 'react'
import { IconI } from '@/interfaces'
import cx from 'classnames'

const emailIcon: React.FC<IconI> = ({
    addClass,
}) => {
    return (
        <svg className={cx("", {
            [addClass]: addClass
        })} viewBox="0 0 685 519" fill="background" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1413 0H667.048L414.755 211.64L414.619 211.734L342.093 272.603L269.91 212.082L269.775 211.962V211.967C269.587 211.795 269.389 211.639 269.186 211.488L17.1413 0ZM684.195 14.3907L437.408 221.377L684.195 501.804V14.3907ZM669.507 518.497L420.533 235.551L357.741 288.212L349.283 295.285L349.101 295.441L348.903 295.592L348.705 295.748L348.517 295.884L348.314 296.035L348.111 296.17L347.705 296.42L347.491 296.545L347.278 296.655L347.059 296.775L346.845 296.884L346.632 296.988L346.403 297.077L346.184 297.17L345.97 297.259L345.741 297.337L345.512 297.41L345.283 297.488L345.049 297.561L344.819 297.618L344.601 297.676L344.356 297.738L344.121 297.78H343.892L343.658 297.821H340.34L340.106 297.775L339.871 297.733L339.642 297.67L339.408 297.613L339.179 297.556L338.944 297.483L338.715 297.42L338.481 297.332L338.252 297.254L338.022 297.165L337.793 297.071L337.58 296.967L337.351 296.863L337.137 296.754L336.918 296.644L336.705 296.525L336.491 296.389L336.496 296.384C336.418 296.353 336.345 296.311 336.278 296.259L336.048 296.191L335.835 296.04L335.632 295.905L335.429 295.748L335.226 295.597L335.028 295.405L263.664 235.545L14.6903 518.491L669.507 518.497ZM0 501.804L246.787 221.377L0 14.3907V501.804Z"/>
        </svg>
    )
}

export default emailIcon