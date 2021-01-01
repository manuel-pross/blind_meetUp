import React, { Component } from 'react';
import { notify } from '../Notifications/Notification';
import axios from 'axios';

import { withTranslation } from 'react-i18next';

class PendingMeeting extends Component {
   state = {
      btnPressed: false,
      displayBeforeClick: { display: "block" },
      displayAfterClick: { display: "none" },
      joinBtnSpanClass: "btn btn-meeting",
      meetingClass: "meeting",
   }

   joinClickHandler = (thisMessage) => {
      if (!this.state.btnPressed) {
         this.setState({ btnPressed: true, displayAfterClick: { display: "block" }, displayBeforeClick: { display: "none" } })
      }
      if (this.state.btnPressed) {
         axios.put('/api/register_user/' + this.props.user.id + '_' + this.props.id)
            .then((response) => {
               notify(thisMessage);
               // this.setState({ joinBtnSpanClass: "btn btn-meeting--animation", meetingClass: "meeting--closed" });
               // setTimeout(() => {
               //    document.querySelector(".meeting--closed").parentElement.parentElement.remove();
               // }, 2500);
               this.exitClickHandler();
               this.props.loadAllMeetings();
               // this.setState({ btnPressed: false });
            })
            .catch((error) => {
               if (error.response) {
                  notify(error.response.data.message);
               }
            });

      }
   }

   acceptBtn = () => {
      this.setState({ accepted: true })
   }

   exitClickHandler = () => {
      if (this.state.btnPressed) {
         this.setState({ btnPressed: false, displayAfterClick: { display: "none" }, displayBeforeClick: { display: "block" } })
      }
   }

   //TODO: Fehler beim toggeln, nachdem man ein duo Meeting angemeldet hat.
   render() {
      const { t } = this.props;
      return (
         <div key={this.props.key} className={this.state.meetingClass}>
            <button onClick={this.exitClickHandler} style={this.state.displayAfterClick} className="meeting__exitBtn"></button>
            <div className="meeting__wrapper">
               <div style={this.state.displayAfterClick} className="meeting__btnWrapper">
                  <p className="meeting__dataAfterClick">{t("accept")}</p>
                  <p className="meeting__dataAfterClick">{t("acceptAgain")}</p>
               </div>
               <div style={this.state.displayBeforeClick} className="meeting__dataWrapper">
                  <p className="meeting__data">{this.props.day}</p>
                  <p className="meeting__data meeting__data--date">{this.props.date + ", "} {this.props.time}</p>
                  <span className="meeting__dataWrapperLocation--pipe"></span>
               </div>
               <div style={this.state.displayBeforeClick} className="meeting__dataWrapperLocation">
                  <p className="meeting__data meeting__data--place">{this.props.place} </p>
                  <span className="meeting__dataWrapperLocation--pipe"></span>
               </div>
            </div>
            <div className="meeting__joinBtnWrapper">
               <button onClick={() => this.joinClickHandler(t("SuccessfullyRegistered"))} className={this.state.joinBtnSpanClass}><span className="meeting__btnDesc">{t("btnJoin")}</span><span className="btn-meeting__arrow" /></button>
            </div>
         </div >
      );
   };
};

export default withTranslation('meetUps')(PendingMeeting);