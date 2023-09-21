export const getNextTraining = (trainings, lastTraining) => {
  const nextTrainingIndex = trainings.indexOf(lastTraining) + 1
  return trainings[nextTrainingIndex >= trainings.length ? 0 : nextTrainingIndex]
}
