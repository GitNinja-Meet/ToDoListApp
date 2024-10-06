import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './component/ToDoList';  
import ToDoForm from './component/ToDoForm';  

function LayoutComponents() {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default LayoutComponents;

