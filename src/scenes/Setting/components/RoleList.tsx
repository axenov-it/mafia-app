interface Props {
  roles: string[]
}

export const RolesList = ({ roles }: Props) => (<div>
  <h3>Роли</h3>
  <div>{roles.map((role, index) => <li key={index}>{role}</li>)}</div>
</div>)


