import React, { useState } from 'react';
import DashboardHeaderImage from '../../../assets/img/placeholder/1920x395-placeholder.png'

import { withTranslation } from 'react-i18next';

const DashboardHeader = (props) => {
   // const [userName] = useState(props.user.first_name);


   const { t } = props;
   return (
      <div className="dashboardHeader mt-200 position-relative">
         <img className="dashboardHeader__image" src={DashboardHeaderImage} alt="dashboardHeaderImage" />
         <div className="dashboardHeader__wrapper">
            <h3 className="dashboardHeader__title">{t("greetings")}{props.user == undefined ? null : props.user.first_name} </h3>
            <p className="dashboardHeader__p">{t("text")}</p>
         </div>
      </div>
   )
};

export default withTranslation('dashboardHeader')(DashboardHeader);