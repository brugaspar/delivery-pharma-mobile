import { useEffect, useRef } from "react";
import { TextInput } from "react-native";
import { Wrapper } from "../../components/Wrapper";
import { Input } from "../../components/Input";

export function Search() {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Wrapper>
      <Input inputRef={inputRef} icon="MagnifyingGlass" placeholder="Pesquisar produto" />
    </Wrapper>
  );
}