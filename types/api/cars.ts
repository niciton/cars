export type TProduct = {
  id: number,
  user_id: number,
  company_id: number,
  angles_count: number,
  vin: number,
  vin_postfix: any,
  vehicle_name: string,
  brand: any,
  model: any,
  body_type: any,
  fuel_type: any,
  hp: any,
  ccm: any,
  description: any,
  moderated: true,
  defect_state: string,
  placeholder: string,
  preview: string,
  photo: {
    id: number,
    car_id: number,
    angle_id: number,
    url: string,
    processed_url: string,
    status: number,
    status_name: string,
    defect_state: string,
    in_process_by_admin: number,
    created_at: number
  },
  photos_count: number,
  uploads: number,
  created_at: number
}

export type TApiCarsResponse = {
  data: TProduct[],
  meta: {
    current_page: number,
    from: number,
    last_page: number,
    links: [],
    path: string,
    per_page: number,
    to: number,
    total: number
  },
}