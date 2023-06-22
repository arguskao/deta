import {
  Facebook,
  Twitter,
  Youtube,
  Github,
  Instagram,
  Linkedin,
} from 'assets/icons/social-icons';

const social = [
  {
    id: 0,
    link: 'https://www.facebook.com/Dayafulun',
    icon: <Facebook />,
    className: 'facebook',
    title: 'facebook',
  }
  
];

const Footer = () => (
  <footer className="w-full flex items-center justify-center bg-white shadow-footer px-4 py-30px lg:px-35px lg:justify-between">
    <p className="text-gray-900">
      &copy; {new Date().getFullYear()}{' '}
      <a
        className="font-semibold transition-colors duration-200 ease-in-out hover:text-red-700"
        href="https://linebot.com.tw/"
      >
        量心醫藥股份有限公司
      </a>{' '}
      版權所有
    </p>

    <div className="items-center hidden lg:flex">
      {social.map((item, index) => (
        <a
          href={item.link}
          className={`social ${item.className}`}
          key={index}
          target="_blank"
          rel="noreferrer"
        >
          <span className="sr-only">{item.title}</span>
          {item.icon}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
