import React, { Component } from 'react';
import ImageText from './ImageText'

import { withTranslation } from 'react-i18next';

import firstImage from '../../../assets/img/placeholder/720x485-placeholder.png'
import secondImage from '../../../assets/img/placeholder/720x485-placeholder.png'

class AboutProject extends Component {
   render() {
      const { t } = this.props;
      return (
         <div className="container mb-300">
            <h1 className="aboutProject__title">{t("title")}</h1>
            <p className="aboutProject__text mb-200">{t("text")}</p>
            <ImageText alignment img={firstImage} text={t("firstText")} />
            <ImageText alignment={false} img={secondImage} text={t("secText")} />
         </div>

      );
   };
};

export default withTranslation('aboutProject')(AboutProject);