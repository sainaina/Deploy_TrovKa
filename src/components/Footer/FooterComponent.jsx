import React from 'react';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { MdOutlineCopyright } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

export const FooterComponent = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-Primary w-full">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start py-8 md:py-16">
        <img src="./src/assets/logo/logo-footer.png" alt="Logo" className="w-40 mb-8 md:mb-0 md:ml-14 md:-translate-y-5" />

        <div className="text-white uppercase flex flex-col md:flex-row md:translate-y-10 text-[20px] md:justify-between md:w-full md:px-16">
          <div className="mb-8 md:mb-0 md:mr-12">
            <p>{t('Feature')}</p>
            <ul className="capitalize text-[17px] block -ml-4 mt-4 md:mt-12 leading-8">
              <li><a href="#">{t('Listing')}</a></li>
              <li><a href="#">{t('Searching')}</a></li>
              <li><a href="#">{t('Filtering')}</a></li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0 md:mr-12">
            <p>{t('Category_1')}</p>
            <ul className="capitalize text-[17px] mt-4 -ml-4 block md:mt-12 leading-8">
              <li><a href="#">{t('Eduaction')}</a></li>
              <li><a href="#">{t('Auto_service')}</a></li>
              <li><a href="#">{t('Home_Service')}</a></li>
              <li><a href="#">{t('Restaurant')}</a></li>
              <li><a href="#">{t('Electronic')}</a></li>
            </ul>
          </div>
          <div>
            <p>{t('Contact_Us')}</p>
            <ul className="capitalize text-[17px] block mt-4 -ml-4 md:mt-12 leading-8">
              <li><a href="#">{t('Address')}: 11st Toulkork, Phnom Penh</a></li>
              <li><a href="#">{t('Email')}: trovka@gmail.com</a></li>
              <li><a href="#">{t('Phone')}: 012 345 678</a></li>
              <li className="w-28 mt-2">
                <div className="flex justify-between text-2xl items-center">
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaTelegram /></a>
                  <a href="#"><IoLogoYoutube className="text-[28px]" /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full h-[85px] mt-8 md:mt-16 border-t flex justify-center items-center text-white text-lg">
        <MdOutlineCopyright className="text-2xl mr-1" />
        <p>2024 TROVKA. All rights reserved</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
