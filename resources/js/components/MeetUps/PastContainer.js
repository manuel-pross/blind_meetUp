import React, { Component } from 'react';

import Modal from '../UI/Modal/Modal';
import AddMeetingForm from '../UI/Modal/Input/AddMeetingForm';
import EditMeetingForm from '../UI/Modal/Input/EditMeetingForm';
import PastMeeting from './pastMeeting'

import Slider from "react-slick";
import { withTranslation } from 'react-i18next';

import axios from 'axios';
import i18n from '../../i18n';

class PendingContainer extends Component {
   state = {
      newMeetingModal: false,

      editMeetingModal: false,
      editMeetingData: {
         id: "",
         type: "",
         date: "",
         place: "",
         members: "",
         max_members: "",
         rating: "",
         img_link: ""
      },
      maxMeetingSetting: 3,
      maxMeetingSettingMD: 2,
   }

   deleteMeeting = (id) => {

      axios.delete('/api/meeting/' + id).then((response) => {
         this.props.loadMeetings();
      });
   }

   editMeeting = (id, type, date, place, members, max_members, rating, img_link) => {
      this.setState({
         editMeetingData: {
            id,
            type,
            date,
            place,
            members,
            max_members,
            rating,
            img_link
         },
         editMeetingModal: !this.state.editMeetingModal,
         editMeetingModalMD: !this.state.editMeetingModal
      })
   }

   newMeetingModalHandler = () => {
      if (this.state.newMeetingModal) {
         this.setState({ newMeetingModal: false });
      } else {
         this.setState({ newMeetingModal: true });
      }
   }

   editMeetingModalHandler = () => {
      if (this.state.editMeetingModal) {
         this.setState({ editMeetingModal: false });
      } else {
         this.setState({ editMeetingModal: true });
      }
   }

   formateDate = (date) => {
      const year = date.slice(0, 4)
      const month = date.slice(5, 7)
      const day = date.slice(8, 10)
      return (day + "." + month + "." + year)
   }

   getThisDay = (date) => {
      const thisDate = new Date(date).getDay()
      switch (thisDate) {
         case 0:
            return "sunday"
         case 1:
            return "monday"
         case 2:
            return "thursday"
         case 3:
            return "wednesday"
         case 4:
            return "tuesday"
         case 5:
            return "friday"
         case 6:
            return "saturday"
      }
   }

   setSettingState = () => {
      let meetingCount = 0;
      let meetingCountMD = 0;
      this.props.meetings.map(() => {
         meetingCount++
         meetingCountMD++
      })
      if (meetingCountMD > 2) {
         meetingCountMD = 2
      }
      if (meetingCount > 3) {
         meetingCount = 3
      }
      this.setState({ maxMeetingSetting: meetingCount })
      this.setState({ maxMeetingSettingMD: meetingCountMD })
   }

   componentDidMount() {
      this.setSettingState();
   }

   render() {
      const { t } = this.props;

      // function SampleNextArrow(props) {
      //    const { onClick } = props;
      //    return (
      //       <div
      //          className={"slick-arrow slick-next teamSlider__arrow-right"}
      //          onClick={onClick}>
      //          <div className="teamSlider__arrow-right-stroke"></div>
      //       </div>
      //    );
      // }

      // function SamplePrevArrow(props) {
      //    const { onClick } = props;
      //    return (
      //       <div
      //          className={"slick-arrow slick-prev teamSlider__arrow-left"}
      //          onClick={onClick}>
      //          <div className="teamSlider__arrow-left-stroke"></div>
      //       </div>
      //    );
      // }

      const settings = {
         speed: 500,
         slidesToShow: this.state.maxMeetingSetting,
         dots: true,
         // slidesToScroll: this.props.meetingCount
         // nextArrow: <SampleNextArrow />,
         // prevArrow: <SamplePrevArrow />,
         responsive: [
            {
               breakpoint: 767,
               settings: {
                  slidesToShow: 1,
               }
            },
            {
               breakpoint: 1199,
               settings: {
                  slidesToShow: this.state.maxMeetingSettingMD,
               }
            }
         ]
      };
      // TODO: Image Link hinzufügen
      return (
         <div className="container mb-400">
            <div className="meetUps">
               <h2 className="meetUps__heading">{t("title")}</h2>
               <Slider {...settings}>
                  {this.props.meetings.map((e, i) => {
                     const time = e.date.slice(11, 16);
                     return (
                        <PastMeeting key={i} place={e.place} date={this.formateDate(e.date)} time={time} day={t(this.getThisDay(e.date))} />
                     )
                  })}
               </Slider>
            </div>
         </div>
      )
   };
};


export default withTranslation('meetUps')(PendingContainer);