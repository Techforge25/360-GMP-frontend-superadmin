import { ParamValue } from "next/dist/server/request/params";
import CreateRoleForm from "../forms/roles/CreateRoleForm";

type Props = {
  adminId: ParamValue;
}

export default function CreateNewRole({ adminId }: Props) {
  return <CreateRoleForm adminId={adminId} />;
}
