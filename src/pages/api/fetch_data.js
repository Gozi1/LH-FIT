import { getExercises } from "../../helpers/fetch_data";

export default async function handler(req, res) {
  const data = await getExercises();
  res.status(200).json(data);
}
