import { router } from "expo-router";
import { useState } from "react";
import { Text, View, Modal, Pressable, Button } from "react-native";

export default function ChildScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Child Screen</Text>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <ModalView
        visible={modalVisible}
        close={() => {
          setModalVisible(false);
          router.navigate("/child/secondchild");
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Tap backgrop to dismiss modal & navigate</Text>
      </ModalView>
    </View>
  );
}

const ModalView = ({
  children,
  visible,
  close,
}: {
  children: React.ReactNode;
  visible: boolean;
  close: () => void;
}) => {
  return (
    <Modal animationType="fade" onRequestClose={close} transparent={true} visible={visible}>
      <Pressable
        accessible={false}
        onPress={close}
        style={{
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {children}
      </Pressable>
    </Modal>
  );
};
