import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

export default function Detail() {
  const router = useRouter();
  // console.log(router);
  // const [movie, setMovie] = useState();
  // useEffect(() => {
  //   (
  //     async () => {
  //       const res = await (await fetch(`/api/movies/${router.query.id}`)).json();
  //       setMovie(res);
  //     }
  //   )();
  // }, []);
  return (
    <div>
      <h4>{router.query.title || 'loading...'}</h4>
      {/* {!movie && <div>loading...</div>}
      {movie && (
        <div>
          {movie.original_title}
        </div>
      )} */}
    </div>
  );
}