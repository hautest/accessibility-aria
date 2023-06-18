export const WatchingProduct = () => {
  return (
    <>
      <div>aria-hidden 사용 안함</div>
      <div>
        <span>지금 이 상품 27명이 보는중</span>
        <span>👀</span>
      </div>
      <br />
      <br />
      <div>aria-hidden 사용 함</div>
      <div>
        <span>지금 이 상품 27명이 보는중</span>
        <span aria-hidden="true">👀</span>
      </div>
    </>
  );
};
