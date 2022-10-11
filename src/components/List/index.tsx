import { useCallback } from "react";
import { FlatList, FlatListProps, ListRenderItemInfo } from "react-native";

interface ListProps extends FlatListProps<any> {
  data: any;
}

export function List({ data, ...props }: ListProps) {
  const keyExtractor = useCallback((item: { id: any }) => String(item.id), []);
  return (
    <FlatList
      {...props}
      data={data}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
    />
  );
}
