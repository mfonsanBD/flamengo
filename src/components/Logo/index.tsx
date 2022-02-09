import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'red' | 'black'
  size?: 'small' | 'normal' | 'large'
}

const Logo = ({ color = 'white', size = 'normal' }: LogoProps) => (
  <S.Wrapper color={color} size={size}>
    <svg
      width="63"
      height="60"
      viewBox="0 0 63 60"
      fill="none"
      role="img"
      aria-label="Flamengo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_86_2341)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.0432 0C16.3982 0.117227 16.7465 0.261245 17.1083 0.358376L17.1786 0.375124C19.3688 1.05147 21.6566 1.35712 23.9476 1.27944H24.0816C25.207 1.29954 26.3357 1.27945 27.4644 1.256H27.662C30.2805 1.21067 32.8968 1.43514 35.4693 1.92587C38.6941 2.50536 41.7478 3.80099 44.4053 5.71731C46.7325 7.49184 48.7078 9.68528 50.2298 12.1849L50.2667 12.2418C51.3514 14.0339 52.3051 15.9022 53.1203 17.8319C53.1371 17.872 53.1739 17.9558 53.1906 17.9993C53.3347 18.3108 53.4552 18.6357 53.5825 18.9539C53.1865 18.9577 52.7979 19.0626 52.4538 19.2587C51.9102 19.6364 51.4814 20.1568 51.2145 20.7625C50.6318 21.9381 50.2466 23.1941 49.7576 24.4066C48.86 26.7511 47.6207 29.0086 45.8556 30.8139C45.8115 30.8556 45.7582 30.8865 45.7001 30.9039C45.6419 30.9214 45.5805 30.925 45.5207 30.9144C44.0369 30.9144 42.5532 30.9144 41.0728 30.9144C42.0437 29.8763 42.836 28.6846 43.4173 27.3875C44.7101 24.5473 44.958 21.3286 44.5695 18.2606C44.3311 16.382 43.7438 14.5645 42.8378 12.9016C41.6142 10.6907 39.7808 8.87822 37.556 7.68002C35.7354 6.72009 33.7626 6.08214 31.7248 5.79435C27.3648 5.19828 22.9252 5.67777 18.793 7.19102C18.5451 6.5446 18.304 5.89817 18.0494 5.2551C18.0293 5.20821 17.9925 5.11443 17.9757 5.06754C17.3494 3.37278 16.6695 1.69811 16.0532 0H16.0432ZM19.0207 50.24C19.6967 50.4037 20.3809 50.5312 21.0705 50.6218H21.1342C22.3431 50.8215 23.5664 50.9212 24.7916 50.9199C24.7916 52.7386 25.0294 54.6042 25.8601 56.2521C26.5173 57.5472 27.5245 58.6322 28.7673 59.3837C25.7494 60.2219 22.5567 60.1952 19.5533 59.3067L19.4628 59.2832C18.3012 58.9325 17.234 58.3233 16.3413 57.5014L16.4283 57.431L16.703 57.2033C17.667 56.3795 18.338 55.2654 18.6155 54.0281C18.9093 52.7841 19.0454 51.508 19.0207 50.23V50.24ZM34.0927 40.2691C36.454 42.2083 38.1655 44.7806 39.8469 47.3027C39.8469 48.6424 39.8469 50.0123 39.8469 51.3654C39.8938 53.375 40.3258 55.4516 41.4747 57.1397L41.5082 57.1966C42.1078 58.0875 42.8941 58.8372 43.8125 59.3938C42.4343 59.803 41.0032 60.0062 39.5656 59.9966H39.4048C38.0209 60.032 36.6388 59.8742 35.2985 59.5277C33.875 59.1493 32.4516 58.5698 31.3831 57.5181C31.7241 57.2737 32.0354 56.9905 32.3109 56.6741C32.3572 56.6251 32.4008 56.5737 32.4415 56.52C33.3023 55.4784 33.7076 54.1487 33.9186 52.8358C34.0608 51.7545 34.1179 50.6637 34.0894 49.5735C34.0894 46.4754 34.0894 43.3739 34.0894 40.2758L34.0927 40.2691ZM19.0207 14.8576C19.0207 24.1733 19.0207 33.4867 19.0207 42.7978C20.8528 43.5648 22.8045 44.0068 24.7883 44.104C24.7883 41.5585 24.7883 39.0164 24.7883 36.4709C26.5756 36.4467 28.36 36.6254 30.107 37.0034C31.5105 37.3219 32.8456 37.8891 34.0492 38.6781C35.4938 39.6892 36.7747 40.916 37.8473 42.3155C39.6258 44.5495 41.1196 46.9845 42.6905 49.3658C44.2545 51.858 45.9611 54.2579 47.8016 56.5535L47.9724 56.7545C48.4513 57.3071 48.937 57.8531 49.4662 58.3555L49.7509 58.6234C50.1374 58.9738 50.5421 59.3036 50.9633 59.6115C51.3792 59.5462 51.7838 59.4233 52.1657 59.2464C52.985 58.8797 53.7649 58.4308 54.4935 57.9067C54.5847 57.8264 54.6821 57.7536 54.7849 57.6889C55.15 57.4243 55.4916 57.1296 55.8333 56.8349L55.8701 56.8047C56.7046 56.0622 57.4509 55.2261 58.0941 54.3128C58.1567 54.2079 58.2261 54.1072 58.3017 54.0114C59.1869 52.7157 59.7327 51.2186 59.8893 49.6572L59.8022 49.7209L59.4673 49.952C59.0775 50.214 58.6701 50.449 58.2481 50.6553L58.1912 50.6855C57.7598 50.9056 57.3119 51.0915 56.8515 51.2415C56.7666 51.2783 56.6779 51.3053 56.5869 51.3219C55.8531 51.5373 55.0907 51.6389 54.3261 51.6233H54.1151C53.0288 51.574 51.971 51.2602 51.0337 50.7089C50.9537 50.6695 50.8765 50.6248 50.8026 50.575C50.1217 50.1496 49.501 49.6348 48.9571 49.0443C48.0446 48.0219 47.1924 46.9472 46.4049 45.8256C45.3264 44.3385 44.2747 42.8313 43.146 41.381C41.4337 39.0991 39.4547 37.0302 37.2512 35.2183C35.9809 34.2463 34.5598 33.4893 33.0444 32.9776C30.385 32.0699 27.5716 31.7952 24.7849 31.7952C24.7849 26.1248 24.7849 20.4544 24.7849 14.7806C22.9093 14.1978 20.883 14.3419 19.0107 14.871L19.0207 14.8576ZM31.8386 10.4734C32.5085 12.2329 33.1784 13.9902 33.8482 15.7452C33.9934 16.0297 34.0789 16.3409 34.0994 16.6596C34.0994 21.8075 34.0994 26.9555 34.0994 32.1034C35.7769 32.6795 37.327 33.5746 38.6646 34.7393C39.4115 35.3522 40.0679 36.079 40.7747 36.7154C42.9718 36.7422 45.1723 36.7154 47.3695 36.7322C48.5887 36.7723 49.8547 37.2078 50.6451 38.1791C51.5997 39.3312 51.7605 40.9155 51.6499 42.3557C52.8496 41.7274 53.8969 40.8436 54.7179 39.7667C55.5782 38.5862 56.1516 37.2216 56.3926 35.7809C56.7598 33.7806 56.624 31.7204 55.9974 29.7856C55.5676 30.3206 55.0568 30.7851 54.4835 31.1622C53.261 31.9158 51.804 32.1469 50.3772 32.1436H39.8503C39.8503 26.9052 39.8503 21.6668 39.8503 16.4285H42.9819C42.5437 14.7916 41.8326 13.2403 40.8785 11.8399C39.6343 11.8584 38.39 11.8114 37.1507 11.6992C35.3317 11.5241 33.5442 11.1074 31.8353 10.46L31.8386 10.4734ZM61.9425 8.96952C61.2749 10.0543 60.2524 10.8744 59.0486 11.2906C58.9638 11.3362 58.8722 11.3678 58.7773 11.3844C58.0568 11.6054 57.3124 11.7392 56.5601 11.783H56.339C55.1902 11.8432 54.0414 11.7997 52.8926 11.8131H52.7485C52.2629 11.8131 51.7739 11.8131 51.2882 11.8131C52.2165 13.2928 53.0542 14.8274 53.7969 16.4084C54.4886 16.3893 55.1714 16.5684 55.7648 16.9244C56.3582 17.2805 56.8375 17.7987 57.1462 18.418C57.7211 19.5309 57.913 20.8023 57.6922 22.0353C58.226 21.7548 58.7367 21.4322 59.2194 21.0707C59.2965 21.0104 59.3769 20.9467 59.4539 20.8798C60.018 20.3963 60.5228 19.8476 60.9578 19.2453L61.0984 19.0376C61.2516 18.8046 61.3913 18.563 61.5171 18.3142C61.546 18.2151 61.5963 18.1236 61.6645 18.0462C62.2622 16.7453 62.6218 15.3477 62.7262 13.9198V13.6954C62.8125 12.113 62.629 10.5273 62.1836 9.00636L62.0898 8.73841L61.9391 8.95277L61.9425 8.96952ZM26.0309 6.90633C22.2111 7.18196 18.5018 8.31045 15.1757 10.2088L14.9915 10.3159C11.6796 12.3027 8.83959 14.9862 6.66839 18.1802L6.59805 18.2807C5.332 20.1429 4.39418 22.196 3.39943 24.2123C3.3628 24.294 3.32142 24.3734 3.27551 24.4501C2.95129 25.1102 2.56552 25.7382 2.12334 26.3258C1.61759 26.9956 0.88073 27.5349 0.0166016 27.5148C1.08273 32.3479 3.2502 36.8697 6.35019 40.7279L6.44733 40.8418C7.49811 42.1201 8.67274 43.2914 9.95408 44.3385L10.0646 44.4323C13.8832 47.5441 18.593 49.36 23.5122 49.617C26.6796 49.7916 29.8511 49.3549 32.8535 48.3309C32.8535 46.8405 32.8535 45.3466 32.8535 43.8562C31.6079 44.4068 30.3015 44.8082 28.9616 45.0519C25.4725 45.7039 21.8682 45.3016 18.6088 43.8964C15.8004 42.6523 13.428 40.5971 11.7962 37.9949C10.1959 35.3997 9.29579 32.4339 9.18374 29.3871C9.06405 26.8998 9.45266 24.4142 10.3259 22.0822C11.3043 19.3767 13.0632 17.0222 15.38 15.3165C17.1516 14.054 19.2385 13.3074 21.4088 13.1595C23.4074 12.9509 25.416 13.4486 27.0859 14.5663C28.4087 15.5281 29.4047 16.8724 29.9396 18.418C30.3686 17.4124 30.6538 16.3514 30.7869 15.2663C30.9533 14.118 31.0428 12.9599 31.0549 11.7997C31.0013 10.1552 30.9444 8.45037 30.3348 6.91638C28.9031 6.78949 27.4632 6.78613 26.0309 6.90633Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_86_2341">
          <rect width="62.7398" height="60" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </S.Wrapper>
)

export default Logo
