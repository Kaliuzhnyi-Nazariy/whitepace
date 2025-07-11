import Image from "next/image";
import React from "react";

const SocialMedia = ({ extraStyles = "" }: { extraStyles?: string }) => {
  return (
    <ul
      className={`flex gap-8 justify-center items-center mt-5 ${extraStyles}`}
    >
      <li>
        <a href="https://www.facebook.com/" target="_blank">
          <Image src="/Facebook.png" alt="Facebook" width={9} height={17} />
        </a>
      </li>
      <li>
        <a href="https://x.com/" target="_blank">
          <Image src="/Twitter.png" alt="Twitter" width={17} height={14} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/" target="_blank">
          <Image src="/Linkedin.png" alt="LinkedIn" width={15} height={15} />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
