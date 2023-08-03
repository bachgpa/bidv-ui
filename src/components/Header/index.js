import { faDotCircle, faLock, faMagnifyingGlass, faMapLocation, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import style from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

function Header() {
   // const header = clsx(style.header);
   return (
      <h2 className={clsx(style.header)}>
         <div className={clsx(style.options)}>
            <div className={clsx(style.mainOption)}>
               <div className={clsx(style.mainOpionLeft)}>
                  <a className={clsx(style.logo)}></a>
                  <a className={clsx(style.personal, style.optionLink)}>Cá nhân</a>
                  <a className={clsx(style.business, style.optionLink)}>Doanh nghiệp</a>
                  <a className={clsx(style.vipGuess, style.optionLink)}>Khách hàng cao cấp</a>
               </div>
               <div className={style.mainOpionRight}>
                  <a className={clsx(style.investerRelation, style.optionLink)}>Quan hệ nhà đầu tư</a>
                  <a className={clsx(style.AboutBIDV, style.optionLink)}>Về BIDV</a>
                  <a className={clsx(style.Careers, style.optionLink)}>Tuyển dụng</a>
                  <a className={clsx(style.FAQs, style.optionLink)}>Hỏi & Đáp</a>
                  <a className={clsx(style.Contact, style.optionLink)}>Liên hệ</a>
               </div>
            </div>
            <div className={clsx(style.moreOption)}>
               <div className={clsx(style.leftLink)}>
                  <a className={clsx(style.moreOptionLink)}>Sản phẩm & Dịch vụ more menu</a>
                  <a className={clsx(style.moreOptionLink)}>Khuyến mại</a>
                  <a className={clsx(style.moreOptionLink)}>Tin tức</a>
                  <a className={clsx(style.moreOptionLink)}>SMSEasy</a>
               </div>
               <div className={clsx(style.rightLink)}>
                  <a className={clsx(style.moreOptionLink)}>
                     <FontAwesomeIcon className={clsx(style.moreOptionLinkIcon)} icon={faMapLocation} />
                  </a>
                  <a className={clsx(style.moreOptionLink)}>
                     <FontAwesomeIcon className={clsx(style.moreOptionLinkIcon)} icon={faMagnifyingGlass} />
                  </a>
                  <a className={clsx(style.moreOptionLink, style.onlineRegister)}>
                     <FontAwesomeIcon className={clsx(style.moreOptionLinkIcon)} icon={faUserPlus} />
                     <div className={clsx(style.registerText)}>Đăng kí dịch vụ trực tuyến</div>
                  </a>
                  <a className={clsx(style.moreOptionLink, style.onlineBanking)}>
                     <FontAwesomeIcon className={clsx(style.moreOptionLinkIcon)} icon={faLock} />
                     <div className={clsx(style.onlBankText)}>Ngân hàng trực tuyến</div>
                  </a>
               </div>
            </div>
         </div>
         <a className={style.lang}>
            <FontAwesomeIcon className={style.langIcon} icon="earth-americas" />
            <span className={style.langText}>EN</span>
         </a>
      </h2>
   );
}

export default Header;
