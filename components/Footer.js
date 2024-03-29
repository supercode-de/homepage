import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-grid">
        <div className="copyright">
          <Link href="/">
            <a>
            <img id="supercodeLogo2022" src="/img/supercode_logo_2022.svg" alt="supercode logo" />
            </a>
          </Link>
          <p className="copy">&copy;&nbsp;2019 – 2022</p>
        </div>

        <div className="social-media">
          <a href="https://www.facebook.com/supercodegmbh/" target="_blank">
            <svg
              width="12"
              height="21"
              viewBox="0 0 12 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6429 1.13393V4.08036H8.89062C8.25074 4.08036 7.8192 4.21428 7.59598 4.48214C7.37277 4.75 7.26116 5.15178 7.26116 5.6875V7.79688H10.5312L10.096 11.1004H7.26116V19.5714H3.84598V11.1004H1V7.79688H3.84598V5.36384C3.84598 3.9799 4.23288 2.90663 5.0067 2.14397C5.78051 1.38132 6.81101 1 8.09821 1C9.19197 1 10.0402 1.04464 10.6429 1.13393Z"
                stroke="#fff"
              />
            </svg>
          </a>
          <a href="https://twitter.com/supercodegmbh" target="_blank">
            <svg
              width="23"
              height="18"
              viewBox="0 0 23 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 2.92893C20.4332 3.75804 19.7479 4.46446 18.9442 5.04822C18.9526 5.16667 18.9569 5.34433 18.9569 5.58122C18.9569 6.68105 18.7961 7.77876 18.4746 8.87437C18.1531 9.96997 17.6646 11.0211 17.0089 12.0279C16.3532 13.0347 15.5728 13.9251 14.6675 14.6992C13.7623 15.4734 12.6709 16.0909 11.3934 16.552C10.1159 17.0131 8.74958 17.2437 7.29442 17.2437C5.00168 17.2437 2.90356 16.6303 1 15.4036C1.29611 15.4374 1.62606 15.4543 1.98985 15.4543C3.89341 15.4543 5.58967 14.8706 7.07868 13.703C6.19035 13.6861 5.3951 13.4133 4.69289 12.8845C3.99069 12.3558 3.50846 11.6811 3.24619 10.8604C3.52538 10.9027 3.78342 10.9239 4.0203 10.9239C4.3841 10.9239 4.74365 10.8773 5.09898 10.7843C4.15143 10.5897 3.36675 10.118 2.74492 9.36929C2.12309 8.62055 1.81218 7.75127 1.81218 6.76142V6.71066C2.38748 7.03215 3.00507 7.20558 3.66497 7.23096C3.1066 6.85871 2.66244 6.37225 2.33249 5.77157C2.00254 5.17089 1.83756 4.51946 1.83756 3.81726C1.83756 3.07275 2.02369 2.38325 2.39594 1.74873C3.41963 3.00931 4.66539 4.01819 6.13325 4.77538C7.60111 5.53258 9.17258 5.95347 10.8477 6.03807C10.78 5.71658 10.7462 5.40355 10.7462 5.09898C10.7462 3.96531 11.1459 2.99873 11.9454 2.19924C12.7449 1.39974 13.7115 1 14.8452 1C16.0296 1 17.0279 1.43147 17.8401 2.29442C18.7623 2.11675 19.6294 1.7868 20.4416 1.30457C20.1286 2.2775 19.5279 3.03045 18.6396 3.56345C19.4264 3.47885 20.2132 3.26735 21 2.92893Z"
                stroke="#fff"
              />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/supercodegmbh/?hl=de"
            target="_blank"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.91677 0.723234C6.98187 0.683786 8.35595 0.664062 10.0391 0.664062C11.7222 0.664062 13.0963 0.683786 14.1614 0.723234C15.0687 0.762682 15.8773 0.920471 16.5874 1.19661C17.2711 1.45959 17.8629 1.84092 18.3625 2.34059C18.8622 2.84026 19.2435 3.43197 19.5065 4.11574C19.7827 4.8258 19.9404 5.63447 19.9799 6.54177C20.0193 7.60687 20.0391 8.98095 20.0391 10.6641C20.0391 12.3472 20.0193 13.7213 19.9799 14.7864C19.9404 15.6937 19.7827 16.5023 19.5065 17.2124C19.2435 17.8961 18.8622 18.4879 18.3625 18.9875C17.8629 19.4872 17.2711 19.8685 16.5874 20.1315C15.8773 20.4077 15.0687 20.5654 14.1614 20.6049C13.0963 20.6443 11.7222 20.6641 10.0391 20.6641C8.35595 20.6641 6.98187 20.6443 5.91677 20.6049C5.00947 20.5654 4.2008 20.4077 3.49074 20.1315C2.80697 19.8685 2.21526 19.4872 1.71559 18.9875C1.21592 18.4879 0.834593 17.8961 0.571607 17.2124C0.295471 16.5023 0.137682 15.6937 0.0982341 14.7864C0.0587862 13.7213 0.0390625 12.3472 0.0390625 10.6641C0.0390625 8.98095 0.0587862 7.60687 0.0982341 6.54177C0.137682 5.63447 0.295471 4.8258 0.571607 4.11574C0.834593 3.43197 1.21592 2.84026 1.71559 2.34059C2.21526 1.84092 2.80697 1.45959 3.49074 1.19661C4.2008 0.920471 5.00947 0.762682 5.91677 0.723234ZM14.3191 2.02501C13.2146 1.98556 11.7879 1.96584 10.0391 1.96584C8.2902 1.96584 6.86353 1.98556 5.75898 2.02501C5.04892 2.05131 4.39147 2.17622 3.7866 2.39976C2.83985 2.79424 2.16924 3.46485 1.77476 4.4116C1.55122 5.01647 1.42631 5.67392 1.40001 6.38398C1.36056 7.48853 1.34084 8.9152 1.34084 10.6641C1.34084 12.4129 1.36056 13.8396 1.40001 14.9441C1.42631 15.6542 1.55122 16.3117 1.77476 16.9165C2.16924 17.8633 2.83985 18.5339 3.7866 18.9284C4.39147 19.1519 5.04892 19.2768 5.75898 19.3031C6.86353 19.3426 8.2902 19.3623 10.0391 19.3623C11.7879 19.3623 13.2146 19.3426 14.3191 19.3031C15.0292 19.2768 15.6867 19.1519 16.2915 18.9284C17.2383 18.5339 17.9089 17.8633 18.3034 16.9165C18.5269 16.3117 18.6518 15.6542 18.6781 14.9441C18.7176 13.8396 18.7373 12.4129 18.7373 10.6641C18.7373 8.9152 18.7176 7.48853 18.6781 6.38398C18.6518 5.67392 18.5269 5.01647 18.3034 4.4116C17.9089 3.46485 17.2383 2.79424 16.2915 2.39976C15.6867 2.17622 15.0292 2.05131 14.3191 2.02501ZM7.19883 13.5043C7.98778 14.2801 8.93452 14.668 10.0391 14.668C11.1436 14.668 12.0871 14.2768 12.8694 13.4944C13.6518 12.7121 14.043 11.7686 14.043 10.6641C14.043 9.55952 13.6518 8.61607 12.8694 7.83369C12.0871 7.0513 11.1436 6.66012 10.0391 6.66012C8.93452 6.66012 7.99107 7.0513 7.20869 7.83369C6.4263 8.61607 6.03512 9.55952 6.03512 10.6641C6.03512 11.7686 6.42302 12.7153 7.19883 13.5043ZM6.40987 7.03487C7.40922 6.03552 8.61894 5.53586 10.0391 5.53586C11.4592 5.53586 12.6689 6.03552 13.6683 7.03487C14.6676 8.03422 15.1673 9.24394 15.1673 10.6641C15.1673 12.0842 14.6676 13.2939 13.6683 14.2933C12.6689 15.2926 11.4592 15.7923 10.0391 15.7923C8.61894 15.7923 7.40922 15.2926 6.40987 14.2933C5.41052 13.2939 4.91086 12.0842 4.91086 10.6641C4.91086 9.24394 5.41052 8.03422 6.40987 7.03487ZM16.2126 4.49049C16.4625 4.72718 16.5874 5.00989 16.5874 5.33862C16.5874 5.66735 16.469 5.94677 16.2324 6.17688C15.9957 6.407 15.7064 6.52205 15.3645 6.52205C15.0358 6.52205 14.7564 6.407 14.5262 6.17688C14.2961 5.94677 14.1811 5.66735 14.1811 5.33862C14.1811 4.99674 14.2961 4.70746 14.5262 4.47077C14.7564 4.23408 15.0358 4.11574 15.3645 4.11574C15.6932 4.11574 15.9759 4.24066 16.2126 4.49049Z"
                fill="#fff"
                className="icon-instagram"
              />
            </svg>
          </a>
        </div>

        <div className="site-info">
          <Link href="/leitbild">
            <a>Leitbild</a>
          </Link>
          <p>&mdash;</p>
          <Link href="/dsgvo">
            <a>DSGVO</a>
          </Link>
          <p>&mdash;</p>
          <Link href="/impressum">
            <a>Impressum</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
          #footer {
            background: var(--super-black);
            color: var(--super-white);
            display: flex;
            justify-content: center;
          }
          .footer-grid {
            width: 93%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
            justify-content: space-between;
          }
          #supercodeLogo2022 {
            width: 70%
          }
          .copyright {
            display: flex;
            align-items: center;
          }
          .copyright .logo {
            color: var(--super-white);
            font-size: 1.3rem;

          }
          .copyright .copy {
            color: var(--super-green);
            font-size: 0.7em;
            margin-left: 2em;
          }

          .social-media {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .social-media a {
            margin: 0.5em;
          }
          .social-media a svg {
            height: 1.5em;
            width: 1.5em;
          }

          .social-media a svg:hover path {
            fill: var(--super-green);
            stroke: var(--super-green);
          }

          .site-info {
            display: flex;
            align-items: center;
            justify-content: space-around;
            text-transform: uppercase;
            font-size: 0.7em;
            letter-spacing: 2px;
            margin: 1em 0;
          }

          a {
            text-decoration: none;
            display: block;
            padding: 0.5em;
            color: var(--super-white);
          }

          .site-info a:visited {
            color: var(--super-white);
          }

          .site-info a:hover {
            text-decoration: underline;
            color: var(--super-green);
          }
          .site-info a:active {
            color: var(--super-lila);
          }

          .white {
            color: var(--super-white);
            font-size: 1.2em;
          }
          @media (max-width: 568px) {
            .footer-grid {
              grid-template-columns: 1fr;
            }
            .copyright {
              justify-content: center;
            }
          }
          @media (max-width: 425px) {
            #footer {
              padding-top: 2%;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
