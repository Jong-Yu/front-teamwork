import { keyframes } from '@emotion/react';
import { MOBILE_MEDIA } from '../../_shared/hooks/Responsive/Responsive.hooks';
import { Scrolldown } from './scrolldown';
import { useRef } from 'react';

export const TitleSection = () => {
  const animation = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
  const ref = useRef<HTMLDivElement>(null);

  const onClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section>
      <div
        css={{
          position: 'relative',
        }}
      >
        <div
          css={{
            width: '100%',
            height: '100vh',
          }}
        >
          <img
            alt=""
            src="https://static.toss.im/assets/homepage/newtossim/new_main.png"
            css={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div
          css={{
            position: 'absolute',
            top: '0px',
            left: 0,
            width: '100%',
            height: '500px',
            background:
              'linear-gradient(180deg, white 0%, white 59px, rgba(255, 255, 255, 0) 100%)',
          }}
        />
        <div
          css={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            animation: `0.5s ease-in-out 0s 1 normal forwards running ${animation}`,
          }}
        >
          <div
            css={{
              marginTop: '170px',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              [MOBILE_MEDIA]: {
                marginTop: '100px',
              },
            }}
          >
            <h1
              css={{
                width: '100%',
                textAlign: 'center',
                marginBottom: '50px',
                fontSize: '66px',
                fontWeight: '700',
                lineHeight: '1.4',
                color: 'rgb(0, 0, 0)',
                [MOBILE_MEDIA]: {
                  fontSize: '33px',
                },
              }}
            >
              {`동호회의 모든 것 \n팀 워크에서 쉽고 빠르게`}
            </h1>
          </div>

          <button
            css={{
              background: 'none',
              border: '0px',
              padding: '0px',
              outline: 'none',
              cursor: 'pointer',
              marginBottom: '30px',
            }}
            onClick={onClick}
          >
            <div
              css={{
                width: '50px',
                height: '50px',
              }}
            >
              <Scrolldown />
            </div>
          </button>
        </div>
      </div>
      <div
        ref={ref}
        css={{
          position: 'relative',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '200px 0',
          background: '#f9fafb',
        }}
      >
        <p
          css={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '1.6',
            color: '#191f28',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          {`내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.\n이제껏 경험 못 했던 쉽고 편리한 금융 서비스,\n토스와 함께라면 당신의 일상이 새로워질 거예요.`}
        </p>
      </div>
      <div
        css={{
          position: 'relative',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '200px 0',
          background: '#f9fafb',
        }}
      >
        <p
          css={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '1.6',
            color: '#191f28',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          {`내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.\n이제껏 경험 못 했던 쉽고 편리한 금융 서비스,\n토스와 함께라면 당신의 일상이 새로워질 거예요.`}
        </p>
      </div>
      <div
        css={{
          position: 'relative',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '200px 0',
          background: '#f9fafb',
        }}
      >
        <p
          css={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '1.6',
            color: '#191f28',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          {`내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.\n이제껏 경험 못 했던 쉽고 편리한 금융 서비스,\n토스와 함께라면 당신의 일상이 새로워질 거예요.`}
        </p>
      </div>
      <div
        css={{
          position: 'relative',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '200px 0',
          background: '#f9fafb',
        }}
      >
        <p
          css={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '1.6',
            color: '#191f28',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          {`내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.\n이제껏 경험 못 했던 쉽고 편리한 금융 서비스,\n토스와 함께라면 당신의 일상이 새로워질 거예요.`}
        </p>
      </div>
      <div
        css={{
          position: 'relative',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '200px 0',
          background: '#f9fafb',
        }}
      >
        <p
          css={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '1.6',
            color: '#191f28',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          {`내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.\n이제껏 경험 못 했던 쉽고 편리한 금융 서비스,\n토스와 함께라면 당신의 일상이 새로워질 거예요.`}
        </p>
      </div>
      <div
        css={{
          position: 'relative',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          padding: '200px 0',
          background: '#f9fafb',
        }}
      >
        <p
          css={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '1.6',
            color: '#191f28',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          {`내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.\n이제껏 경험 못 했던 쉽고 편리한 금융 서비스,\n토스와 함께라면 당신의 일상이 새로워질 거예요.`}
        </p>
      </div>
    </section>
  );
};
