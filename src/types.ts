export type SizeType = {
  width?: number;
  height?: number;
}

export type ItemType = {
  icon: string;
  iconLabel: string;
  title: string;
  subtitle: string;
}

export type TabsType = {
  [key: string]: {
    title: string;
    items: ItemType[]
  }
}