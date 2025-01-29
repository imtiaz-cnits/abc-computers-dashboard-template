"use client";
import React, { useState } from "react";
import userImg from "@/assets/img/navbar-profile-logo.png";
import { DropdownButton } from "react-bootstrap";

const DashboardNavbar = () => {
  return (
    <nav id="page-topbar" className="isvertical-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* <!-- LOGO --> */}
          <div className="navbar-brand-box">
            <a href="index.html" className="logo logo-dark">
              <span className="logo-sm">
                {/* <!-- <svg width="47" height="58" viewBox="0 0 47 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.4678 20.3587V48.4481L23.6448 42.7246V25.2897L32.9986 34.1833V44.3095L38.3814 49.5928V32.6863L27.0863 22.3839V12.0815L17.4678 20.3587Z"
                                        fill="#5AA469" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.54048 19.4614C8.32938 20.5694 5.85136 22.8351 5.62808 23.0343L5.94533 25.2569L10.4078 29.2113L14.6529 26.0098L13.8464 23.0542L9.91002 25.4793L32.2096 6.0779L31.8883 11.8072L30.6549 11.738L31.2611 13.5359L32.2302 13.5902L32.1612 14.821C35.5775 15.3654 31.8561 18.6845 31.4902 15.7535C30.8786 16.6258 31.6461 17.7025 32.7033 17.7618C33.8965 17.8288 35.4796 15.5363 33.253 14.2649L33.2875 13.6495L34.2566 13.7039L35.2363 11.9949L33.9147 11.9208L34.3467 4.2186L36.6696 2.19763L36.3467 1.65036L33.8502 2.03951L12.6629 20.5184L9.54048 19.4614ZM32.417 11.8368L32.7671 5.59287L33.6222 4.84892L33.2278 11.8823L32.417 11.8368Z"
                                        fill="#5AA469" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M16.6733 26.0823L16.3203 26.4391V49.4168L16.6733 49.0645V26.0823Z" fill="#5AA469" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.9672 26.6106L15.6143 26.9746V50.2092L15.9672 49.857V26.6106Z" fill="#5AA469" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.2612 27.1389L14.9082 27.5128V50.9137L15.2612 50.5614V27.1389Z" fill="#5AA469" />
                                    <path d="M35.9102 18.1572L39.9693 21.8555V31.5415L35.9102 28.0193V18.1572Z" fill="#171717" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M32.5566 21.2123L35.9099 18.1572V19.9183L32.5566 22.828V21.2123Z" fill="#171717" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M35.9099 20.7988L32.5566 23.8539V25.0254L32.8024 25.2563L35.9099 22.5599V20.7988Z"
                                        fill="#171717" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M35.9096 23.4404L33.3506 25.772L34.3013 26.5971L35.9096 25.2015V23.4404Z" fill="#171717" />
                                    <path
                                        d="M27.1748 43.6931L10.6729 54.6119H14.535V53.5552L27.1748 47.0392L39.8146 53.5552V54.6119H43.8523L27.1748 43.6931Z"
                                        fill="#171717" />
                                    <path d="M25.1445 48.8005L26.9094 48.4482V50.2093H25.1445V48.8005Z" fill="#171717" />
                                    <path d="M27.2627 48.4482L29.0276 48.8005V50.2093H27.2627V48.4482Z" fill="#171717" />
                                    <rect x="25.1445" y="50.5615" width="1.76487" height="1.76109" fill="#171717" />
                                    <rect x="27.2627" y="50.5615" width="1.76487" height="1.76109" fill="#171717" />
                                    <path
                                        d="M46.8978 57.9574C46.8978 58.3532 37.9209 55.8075 26.8473 55.8075C15.7738 55.8075 6.79688 58.3532 6.79688 57.9574C6.79688 57.5616 15.7738 54.3743 26.8473 54.3743C37.9209 54.3743 46.8978 57.5616 46.8978 57.9574Z"
                                        fill="#171717" />
                                    <path
                                        d="M15.0092 4.8333C20.218 2.08969 26.1438 1.05257 31.9502 1.84216L30.6232 3.01113C25.4597 2.5341 21.4806 3.55911 16.8584 5.99373C11.3843 8.87706 7.25392 13.5602 4.84406 19.2495C2.4342 24.9389 2.06954 31.2847 3.81187 37.2116C5.5542 43.1386 7.88447 48.2822 12.9924 51.7711L12.9321 51.859L11.8566 52.5805C6.69942 48.928 2.92088 43.6453 1.13816 37.581C-0.689548 31.3636 -0.307016 24.7068 2.22093 18.7387C4.74889 12.7705 9.26679 7.85792 15.0092 4.8333Z"
                                        fill="#171717" />
                                </svg> --> */}
              </span>
            </a>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 font-size-24 header-item waves-effect vertical-menu-btn"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>

          {/* <!-- navbar searchbar --> */}
          <div className="search-bar-box d-flex gap-2 align-items-center">
            <button className="nav-src-btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                  stroke="#888888"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                  stroke="black"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input type="text" placeholder="Search keywords..." />
          </div>
          {/* <!-- end navbar searchbar --> */}
        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon"
              id="page-header-notifications-dropdown-v"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.45455 3.4881C6.04947 4.61889 3.63669 7.33014 3.63653 10.5164V16.7253L0.375499 19.3629C0.144442 19.5409 0 19.7945 0 20.0759V20.2035C0 21.2802 1.05824 22.153 2.36364 22.153H8.30287C8.56913 24.0982 10.5705 25.6098 13 25.6098C15.4295 25.6098 17.4309 24.0982 17.6971 22.153H23.6364C24.9418 22.153 26 21.2802 26 20.2035V20.0761C26.0001 19.7947 25.8557 19.541 25.6245 19.3629L22.3638 16.7256V10.5167C22.3637 7.33036 19.9507 4.61872 16.5455 3.48799V2.43688C16.5455 1.16681 15.3593 0.540947 14.8932 0.348687C14.2864 0.0983808 13.6138 0 13 0C12.3862 0 11.7136 0.0983808 11.1068 0.348687C10.6407 0.540947 9.45455 1.16681 9.45455 2.43688V3.4881ZM14.0955 2.92425C14.0894 2.94107 14.083 2.95765 14.0764 2.97398C13.723 2.94113 13.364 2.92425 13.0001 2.92425C12.6362 2.92425 12.2771 2.94114 11.9237 2.97401C11.917 2.95767 11.9106 2.94108 11.9045 2.92425H11.8182V2.43688C11.8182 2.16773 12.3468 1.9495 13 1.9495C13.6532 1.9495 14.1818 2.16773 14.1818 2.43688V2.92425H14.0955ZM15.3025 22.153H10.6975C10.9403 23.0167 11.879 23.6603 13 23.6603C14.121 23.6603 15.0597 23.0167 15.3025 22.153ZM6.00016 10.5164C6.00035 7.41792 9.11241 4.87375 13.0001 4.87375C16.8879 4.87375 20 7.41792 20.0001 10.5164H6.00016ZM6.00016 10.5164H20.0001V16.7256C20.0001 17.2493 20.2555 17.7509 20.7089 18.1175L23.288 20.2035H2.71208L5.6376 17.8373C5.86065 17.6605 6.00016 17.4119 6.00016 17.1347V10.5164Z"
                  fill="#192045"
                />
              </svg>

              <span className="noti-dot">12</span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-xl dropdown-menu-end p-0 page-header-notifications-dropdown-v"
              aria-labelledby="page-header-notifications-dropdown-v"
            >
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="m-0 font-size-15">Notifications</h5>
                  </div>
                  <div className="col-auto">
                    <a
                      href="#!"
                      className="small fw-semibold text-decoration-underline"
                    >
                      Mark all as read
                    </a>
                  </div>
                </div>
              </div>
              <div data-simplebar style={{ maxHeight: "250px" }}>
                <a href="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img
                        src={userImg?.src?.src}
                        className="rounded-circle avatar-sm"
                        alt="user-pic"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-muted font-size-13 mb-0 float-end">
                        1 hour ago
                      </p>
                      <h6 className="mb-1">James Lemire</h6>
                      <div>
                        <p className="mb-0">
                          It will seem like simplified English.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar-sm me-3">
                      <span className="avatar-title bg-primary rounded-circle font-size-18">
                        <i className="fa-regular fa-user"></i>
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-muted font-size-13 mb-0 float-end">
                        3 min ago
                      </p>
                      <h6 className="mb-1">Your order is placed</h6>
                      <div>
                        <p className="mb-0">
                          If several languages coalesce the grammar
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar-sm me-3">
                      <span className="avatar-title bg-success rounded-circle font-size-18">
                        <i className="fa-regular fa-user"></i>
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-muted font-size-13 mb-0 float-end">
                        8 min ago
                      </p>
                      <h6 className="mb-1">Your item is shipped</h6>
                      <div>
                        <p className="mb-0">
                          If several languages coalesce the grammar
                        </p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img
                        src={userImg?.src?.src}
                        className="rounded-circle avatar-sm"
                        alt="user-pic"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <p className="text-muted font-size-13 mb-0 float-end">
                        1 hour ago
                      </p>
                      <h6 className="mb-1">Salena Layfield</h6>
                      <div>
                        <p className="mb-1">
                          As a skeptical Cambridge friend of mine occidental.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="p-2 border-top d-grid">
                <a
                  className="btn btn-link font-size-14 btn-block text-center"
                  style={{
                    display: "inline-block",
                    cursor: "pointer",
                    zIndex: "1",
                  }}
                >
                  <i className="uil-arrow-circle-right me-1"></i>
                  <span>View More..</span>
                </a>
              </div>
            </div>
          </div>

          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item user text-start d-flex align-items-center"
              id="page-header-user-dropdown-v"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle header-profile-user"
                src={userImg?.src}
                alt="Header Avatar"
              />
            </button>
            <div
              className={`dropdown-menu dropdown-menu-end pt-0 profile-dropdown`}
              style={{
                position: "absolute",
                inset: "0px 0px auto auto",
                margin: "0px",
                transform: "translate(-0.1875px, 64px)",
              }}
            >
              <div className="p-3 border-bottom">
                <h6 className="mb-0">Martin Gurley</h6>
                <a href="# " className="mb-0 font-size-11 text-muted">
                  martin.gurley@email.com
                </a>
              </div>
              <a className="dropdown-item" href="contacts-profile.html">
                <i className="mdi mdi-account-circle text-muted font-size-16 align-middle me-2"></i>
                <span className="align-middle">Profile</span>
              </a>
              <a className="dropdown-item" href="apps-chat.html">
                <i className="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-2"></i>
                <span className="align-middle">Messages</span>
              </a>
              <a className="dropdown-item" href="pages-faqs.html">
                <i className="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-2"></i>
                <span className="align-middle">Help</span>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <i className="mdi mdi-cog-outline text-muted font-size-16 align-middle me-2"></i>
                <span className="align-middle me-3">Settings</span>
                <span className="badge badge-soft-success ms-auto">New</span>
              </a>
              <a className="dropdown-item" href="auth-lock-screen.html">
                <i className="mdi mdi-lock text-muted font-size-16 align-middle me-2"></i>
                <span className="align-middle">Lock screen</span>
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="auth-logout.html">
                <i className="mdi mdi-logout text-muted font-size-16 align-middle me-2"></i>
                <span className="align-middle">Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
