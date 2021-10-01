import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import {Grid, Image, Text } from "../elements";


const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text >{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px"></Grid>
            <Text>{props.contents}</Text>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px"></Grid>
            <Text bold>댓글 {props.comment_cnt}개</Text>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "donggun",
    user_profile:
      "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2Nn/image/eDdo6kyw9bIQNeEkA7t8nFYz33U",
  },
  image_url:
    "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/2Nn/image/eDdo6kyw9bIQNeEkA7t8nFYz33U",
  contents: "별이다!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
}; //부모가 props 안줄때 오류 방지(기본적으로 필요한 props들 미리 넘겨놓는 방식)

export default Post;
