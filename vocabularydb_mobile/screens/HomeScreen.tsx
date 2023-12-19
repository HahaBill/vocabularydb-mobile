import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux-state/store';

function HomeScreen() {
  const lambdaAPI =
    'https://4k6jq6ypdpxyzmdnxul6i6y4ke0krgjw.lambda-url.us-east-1.on.aws/';

  const userId = useSelector((state: RootState) => state.user.userId);
  const [listTasks, setListTasks] = React.useState([]);

  const getListTasks = async () => {
    const response = await (
      await fetch(`${lambdaAPI}/list-tasks/${userId}`)
    ).json();
    setListTasks(response.tasks);
  };

  React.useEffect(() => {
    getListTasks();
  });

  const displayTasks = <div>{listTasks.map(task => task.content)}</div>;
  return <View>{displayTasks}</View>;
}

export default HomeScreen;
