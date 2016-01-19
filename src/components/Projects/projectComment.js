import React, {Component} from 'react'

class ProjectComment extends Component {
  render() {
    return(

      <div className="comment media">
        <div className="media-left">
          <a className="avatar avatar-lg" href="javascript:void(0)">
            <img src="../../../global/portraits/5.jpg" alt="..."/>
          </a>
        </div>
        <div className="media-body">
          <div className="comment-body">
            <a className="comment-author" href="javascript:void(0)">Edward Fletcher</a>
            <div className="comment-meta">
              <span className="date">Yesterday at 12:30AM</span>
            </div>
            <div className="comment-content">
              <p>eniam ipsum pariatur anim labore sunt duis officia labore.
                Occaecat sunt ipsum eu ad nostrud do in. Ea aliqua officia
                magna laborum quis proident. Irure ullamco aliquip esse ipsum.
                Exercitation enim dolore commodo mollit non laboris et velit
                adipisicing. Nulla labore sint aliqua minim ad qui. Minim
                sint aliqua magna anim duis laborum quis officia. Veniam
                nostrud aliqua in anim. Pariatur elit ad ea incididunt aliquip.
                Mollit Lorem in magna magna irure commodo do est ullamco.
              </p>
            </div>
            <div className="comment-actions">
              <a className="text-like active icon wb-heart" href="javascript:void(0)" role="button"></a>
              <a href="javascript:void(0)" role="button">Reply</a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default ProjectComment
