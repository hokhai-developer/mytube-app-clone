import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SocialItem.module.scss';
import {
  SocialEmbedIcon,
  SocialWhatsAppIcon,
  SocialFacebookIcon,
  SocialTwitterIcon,
  SocialEmailIcon,
  SocialKakaoTalkIcon,
  SocialRedditIcon,
  SocialVKIcon,
  SocialOKIcon,
  SocialPinterestIcon,
  SocialBloggerIcon,
  SocialTumblrIcon,
  SocialLinkedInIcon,
  SocialSkyrockIcon,
  SocialMixIcon,
  SocialGooIcon,
} from '~/components/Icons';
import { v4 as uuidv4 } from 'uuid';
import Slice from '~/components/Slice';

const socialItem = {
  type: 'socials',
  id: uuidv4(),
  children: [
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialEmbedIcon />,
      title: 'Embed',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialWhatsAppIcon />,
      title: 'Facebook',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialFacebookIcon />,
      title: 'Embed',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialTwitterIcon />,
      title: 'Twitter',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialEmailIcon />,
      title: 'Email',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialKakaoTalkIcon />,
      title: 'Kakao Talk',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialRedditIcon />,
      title: 'Reddit',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialVKIcon />,
      title: 'VK',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialOKIcon />,
      title: 'OK',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialPinterestIcon />,
      title: 'Pinterest',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialBloggerIcon />,
      title: 'Blogger',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialTumblrIcon />,
      title: 'Tumblr',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialLinkedInIcon />,
      title: 'LinkedIn',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialSkyrockIcon />,
      title: 'Skyrock',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialMixIcon />,
      title: 'Mix',
    },
    {
      type: 'social',
      kind: 'socials#social',
      id: uuidv4(),
      icon: <SocialGooIcon />,
      title: 'Goo',
    },
  ],
};

const cx = classNames.bind(styles);
const Socials = (props) => {
  const [socialsData, setSocialsData] = useState([]);
  useEffect(() => {
    if (socialItem.children && socialItem.children.length > 0) {
      setSocialsData(socialItem.children);
    }
  }, [socialItem.children.length]);
  return (
    <Slice>
      {socialsData &&
        socialsData.length > 0 &&
        socialsData.map((social) => {
          return (
            <div className={cx('wrapper-social')} key={social.id}>
              <button className={cx('btn-social')}>{social.icon}</button>
              <p className={cx('title')}>{social.title}</p>
            </div>
          );
        })}
    </Slice>
  );
};

Socials.propTypes = {};

export default Socials;
