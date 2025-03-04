import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <p>
        &copy; {new Date().getFullYear()} Roadtripper Chronicles. All Rights Reserved.
      </p>
      <ul>
        <li>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms-of-service">Terms of Service</a>
        </li>
      </ul>
      <style>
        {/* {`
          .footer {
            padding: 20px;
            background-color: #f8f9fa;
            text-align: center;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            display: inline;
            margin: 0 10px;
          }
        `} */}
      </style>
    </div>
  );
}
