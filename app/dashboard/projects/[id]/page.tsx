import Create from "./Create";
import Edit from "./Edit";
import { Project } from "../Project";

const getProject = async (id: number) => {
  try {
    const response = await fetch(`http://localhost:5000/projects/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return null;
  }
};

export default async function DetailProject({ params }: any) {
  const project = await getProject(params.id);
  return project ? <Edit /> : <Create />;
}
