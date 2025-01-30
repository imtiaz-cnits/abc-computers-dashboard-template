"use client";
import React, { useState } from "react";
import userImg from "@/assets/img/navbar-profile-logo.png";
import { DropdownButton } from "react-bootstrap";
import Link from "next/link";

const DashboardNavbar = () => {
  return (
    <nav id="page-topbar" className="isvertical-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          {/* <!-- LOGO --> */}
          <div className="navbar-brand-box">
            <Link href="/dashboard" className="logo logo-dark">
              <span className="logo-sm">
                <svg
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2051 35.4792V14.3447H21.5219V20.7907C22.8582 20.0059 23.9075 19.5898 26.2534 19.5898C28.2403 19.5898 29.884 20.5005 31.1847 21.8557C32.4854 23.2012 33.1357 25.1378 33.1357 27.6655C33.1357 30.2797 32.47 32.2932 31.1386 33.706C29.8175 35.1188 28.2096 35.592 26.3149 35.592C25.3829 35.592 24.4612 35.609 23.5497 35.1765C22.6484 34.7344 21.8701 34.0856 21.2146 33.2303V35.4792H17.2051ZM21.4911 27.4925C21.4911 29.0783 21.7574 30.2509 22.29 31.0101C23.0376 32.0866 24.031 32.6248 25.2702 32.6248C26.2227 32.6248 27.0318 32.2451 27.6975 31.4859C28.3734 30.717 28.7114 29.5108 28.7114 27.8673C28.7114 26.1182 28.3734 24.8591 27.6975 24.0902C27.0215 23.3118 26.1561 22.9225 25.1013 22.9225C24.0669 22.9225 23.2066 23.3021 22.5204 24.0614C21.8342 24.8111 21.4911 25.9548 21.4911 27.4925Z"
                    fill="url(#paint0_linear_2019_70)"
                  />
                  <path
                    d="M10.7068 24.8169L6.59549 24.1501C7.05767 22.662 7.85306 21.5604 8.98165 20.8453C10.1102 20.1302 11.787 19.7727 14.0119 19.7727C16.0327 19.7727 17.5375 19.9901 18.5263 20.425C19.5152 20.8502 20.2084 21.3961 20.6061 22.0629C21.0146 22.72 21.2188 23.9327 21.2188 25.7011L21.1704 30.4554C21.1704 31.8082 21.4735 32.5752 21.6132 33.2227C21.7637 33.8604 24.2679 34.7797 24.6656 35.5141L17.7202 35.3975C17.6019 35.1269 17.4568 34.8425 17.2849 34.311C17.2096 34.0694 17.5056 34.4929 17.4734 34.4156C16.6995 35.0921 15.8719 35.133 14.9905 35.4712C14.1091 35.8095 12.8189 35.862 11.8193 35.862C10.0565 35.862 8.66457 35.432 7.64347 34.5719C6.63311 33.7119 6.12793 32.6248 6.12793 31.3106C6.12793 30.4409 6.35902 29.6678 6.82121 28.9914C7.28339 28.3053 7.9283 27.7835 8.75594 27.426C9.59432 27.0588 10.7981 26.7399 12.3674 26.4693C14.4849 26.1118 15.952 25.7784 16.7689 25.4692V25.0633C16.7689 24.2806 16.554 23.725 16.124 23.3964C15.6941 23.0582 14.8826 22.8891 13.6895 22.8891C12.8834 22.8891 12.2546 23.034 11.8031 23.3239C11.3517 23.6042 10.9862 24.1018 10.7068 24.8169ZM16.7689 28.1217C16.1885 28.2957 15.2695 28.5034 14.0119 28.745C12.7544 28.9866 11.9321 29.2233 11.5452 29.4553C10.954 29.8321 10.6584 30.3105 10.6584 30.8902C10.6584 31.4604 10.8949 31.9532 11.3678 32.3687C11.8408 32.7842 12.4427 32.992 13.1736 32.992C13.9904 32.992 14.7697 32.7504 15.5114 32.2673C16.0595 31.9001 16.4196 31.4507 16.5916 30.9192C16.7098 30.5714 16.7689 29.9094 16.7689 28.9334V28.1217Z"
                    fill="url(#paint1_linear_2019_70)"
                  />
                  <path
                    d="M45.5514 24.672L41.2647 25.3967C41.1203 24.5947 40.7901 23.9907 40.2743 23.5848C39.7688 23.179 39.1085 22.9761 38.2934 22.9761C37.2102 22.9761 36.3435 23.3288 35.6936 24.0342C35.0539 24.7299 34.7341 25.8992 34.7341 27.5419C34.7341 29.3683 35.0591 30.6583 35.709 31.4121C36.3693 32.1658 37.2514 32.5427 38.3553 32.5427C39.1807 32.5427 39.8564 32.3252 40.3826 31.8904C40.9088 31.4459 41.2802 30.6873 41.4968 29.6147L45.768 30.296C45.3244 32.132 44.4733 33.5186 43.2146 34.456C41.9559 35.3933 40.2691 35.862 38.1542 35.862C35.7503 35.862 33.8314 35.1517 32.3973 33.7312C30.9736 32.3107 30.2617 30.3443 30.2617 27.8318C30.2617 25.2904 30.9787 23.3143 32.4128 21.9034C33.8468 20.483 35.7864 19.7727 38.2315 19.7727C40.233 19.7727 41.8218 20.1786 42.9979 20.9903C44.1844 21.7923 45.0355 23.0195 45.5514 24.672Z"
                    fill="url(#paint2_linear_2019_70)"
                  />
                  <circle
                    cx="26"
                    cy="26.2988"
                    r="25.5517"
                    stroke="black"
                    strokeWidth="0.896552"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2019_70"
                      x1="25.1704"
                      y1="14.3447"
                      x2="25.1704"
                      y2="35.5921"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4CB050" />
                      <stop offset="1" stopColor="#337836" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2019_70"
                      x1="15.3967"
                      y1="19.7727"
                      x2="15.3967"
                      y2="35.862"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4CB050" />
                      <stop offset="1" stopColor="#337836" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_2019_70"
                      x1="38.0149"
                      y1="19.7727"
                      x2="38.0149"
                      y2="35.862"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4CB050" />
                      <stop offset="1" stopColor="#337836" />
                    </linearGradient>
                  </defs>
                            
                </svg>
              </span>
            </Link>
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
                        src={userImg?.src}
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
