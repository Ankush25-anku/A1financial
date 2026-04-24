"use client";

export default function StorySection() {
  return (
    <div className="story padding-top bg-color-3">
      <div className="container">
        <div className="story__wrapper">
          {/* IMAGE + VIDEO */}
          <div className="story__thumb">
            <div
              className="story__thumb-inner"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <img src="/assets/images/about/44.jpeg" alt="story-image" />

              {/* PLAY BUTTON */}
              <div className="story__thumb-playbtn">
                <a
                  href="https://www.youtube.com/watch?v=uJSgaPIvgKk&ab_channel=FreeTemplates"
                  data-fslightbox
                >
                  <i className="fa-solid fa-circle-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SHAPE */}
      <div className="story__shape">
        <span className="story__shape-item story__shape-item--1">
          <span></span>
        </span>
      </div>
    </div>
  );
}
