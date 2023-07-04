import { keyframes } from '@emotion/react';
import { MOBILE_MEDIA } from '../../shared/hooks/Responsive/Responsive.hooks';

export const TitleSection = () => {
  const animation = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });

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
            <div css={{ width: '300px' }}>
              <button className="p-button">다운로드</button>
              <button className="p-button">회원가입</button>
            </div>
          </div>

          <div>
            <button>aa</button>
          </div>
        </div>
      </div>
    </section>
  );
};
