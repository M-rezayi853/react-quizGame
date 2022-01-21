import React from 'react';

import { ReactComponent as RankIcon } from '../../assets/icons/leaderboard.svg';
import { ReactComponent as FlagIcon } from '../../assets/icons/flag.svg';
import { ReactComponent as GroupsIcon } from '../../assets/icons/groups.svg';
import { ReactComponent as StarIcon } from '../../assets/icons/military_tech.svg';
import { ReactComponent as LeagueIcon } from '../../assets/icons/beenhere.svg';
import { ReactComponent as WriteIcon } from '../../assets/icons/design_services.svg';
import { ReactComponent as MagnifierIcon } from '../../assets/icons/zoom_in.svg';
import { ReactComponent as PlayIcon } from '../../assets/icons/whatshot.svg';
import { ReactComponent as FactoryIcon } from '../../assets/icons/home_work.svg';
import { ReactComponent as GiftIcon } from '../../assets/icons/redeem.svg';
import { ReactComponent as SettingIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as ReportIcon } from '../../assets/icons/bug_report.svg';
import { ReactComponent as FollowIcon } from '../../assets/icons/mobile_friendly.svg';
import { ReactComponent as QuestionIcon } from '../../assets/icons/help.svg';
import { ReactComponent as ReadIcon } from '../../assets/icons/chrome_reader_mode.svg';
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';
import CustomBtn from '../CustomBtn/CustomBtn';
import './HalfBtnLink.scss';

const HalfBtnLink = ({ children, type }) => {
  return (
    <div className='row halfBtnLink'>
      <div className='col-12-sm'>
        {type === 'play' ? (
          <CustomBtn success>
            <div className='col-3-sm'></div>

            <div className='col-6-sm'>
              {children}
            </div>

            <div className='col-3-sm'>
              {type === 'play' && <PlayIcon className='halfBtnLink__icon halfBtnLink__icon-play' />}
            </div>
          </CustomBtn>
        ) : (
          <CustomBtn white>
            <div className='col-3-sm'></div>

            <div className='col-6-sm'>
              {children}
            </div>

            <div className='col-3-sm'>
              {type === 'rank' && <RankIcon className='halfBtnLink__icon' /> }
              {type === 'flag' && <FlagIcon className='halfBtnLink__icon' />}
              {type === 'users' && <GroupsIcon className='halfBtnLink__icon' />}
              {type === 'star' && <StarIcon className='halfBtnLink__icon' />}
              {type === 'league' && <LeagueIcon className='halfBtnLink__icon' />}
              {type === 'write' && <WriteIcon className='halfBtnLink__icon' />}
              {type === 'magnifier' && <MagnifierIcon className='halfBtnLink__icon' />}
              {type === 'factory' && <FactoryIcon className='halfBtnLink__icon' />}
              {type === 'gift' && <GiftIcon className='halfBtnLink__icon' />}
              {type === 'setting' && <SettingIcon className='halfBtnLink__icon' />}
              {type === 'report' && <ReportIcon className='halfBtnLink__icon' />}
              {type === 'follow' && <FollowIcon className='halfBtnLink__icon' />}
              {type === 'question' && <QuestionIcon className='halfBtnLink__icon' />}
              {type === 'read' && <ReadIcon className='halfBtnLink__icon' />}
              {type === 'info' && <InfoIcon className='halfBtnLink__icon' />}
            </div>
          </CustomBtn>
        )}
      </div>
    </div>
  )
}

export default HalfBtnLink;
