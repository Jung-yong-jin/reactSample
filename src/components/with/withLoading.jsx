import React from 'react';

export default function (loadingMessage = '로딩 중') { //확장 컴포넌트에서 출력할 메시지를 전달받는 커링 함수입니다.
    
  return function withLoading(WrappedComponent) {
    const { displayName, name: componentName } = WrappedComponent; //WrappedComponent의 displayName과 name을 추출합니다.
    const wrappedComponentName = displayName || componentName; //displayName, name 순서로 이름을 할당 합니다.

    function WithLoading({ isLoading, ...otherProps }) {
      if (isLoading) return loadingMessage;

      return <WrappedComponent {...otherProps} />;
    }

    WithLoading.displayName = `withLoading(${wrappedComponentName})`; //withLoading()에 감싸 컴포넌트 이름을 표시합니다.
    return WithLoading;
  };
}
