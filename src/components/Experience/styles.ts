

import styled from "styled-components";
export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .timeline {
    position: relative;
    margin: 0 auto;
    padding: 2rem 0;
    max-width: 900px;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      height: 100%;
      width: 4px;
      background: var(--green);
      transform: translateX(-50%);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 4rem;

      &:nth-child(even) .timeline-content {
        left: 50%;
        text-align: left;
      }

      &:nth-child(odd) .timeline-content {
        // text-align: right;
      }

      .timeline-icon {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--blue);
        border-radius: 50%;
        width: 16px;
        height: 16px;
      }

      .timeline-content {
        position: relative;
        width: 45%;
        padding: 1.5rem;
        border-radius: 8px;
        background-color: #2b2b2b;
        color: #fff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

        header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1.2rem;
          
          .Company-logo a {
              display: inline-block;
              background:white; 
            }

            .Company-logo .logo-image {
              width: 50px;
              margint-top:5px;
              height: auto;
              transition: transform 0.3s ease;
            }

            .Company-logo .logo-image:hover {
              transform: scale(1.1); /* Slight zoom effect on hover */
            }

          .project-links {
            display: flex;
            gap: 0.8rem;

            a > img {
              width: 24px;
            }
          }
        }

        h3 {
          margin-bottom: 1rem;
        }

        p {
          margin-bottom: 1.5rem;
        }

        footer {
          .tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            font-size: 1.2rem;
            opacity: 0.8;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .timeline {
      &::before {
        left: 20px;
      }

      .timeline-item {
        .timeline-content {
          width: calc(100% - 40px);
          padding: 1rem;
          text-align: left;
        }

        &:nth-child(even) .timeline-content {
          left: 40px;
        }

        &:nth-child(odd) .timeline-content {
          right: auto;
          left: 40px;
        }

        .timeline-icon {
          left: 20px;
        }
      }
    }
  }
`;
