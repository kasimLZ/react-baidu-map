import { useRef, useEffect, useState } from 'react';
import Markdown from '../../components/Markdown';
import { APILoader, Map, useMap, RequireScript } from '../../../';

export default class Page extends Markdown {
  editorUrl = '/src/RequireScript/README.md';
  dependencies = {
    APILoader,
    Map,
    useMap,
    RequireScript,
    useRef,
    useEffect,
    useState,
  };
  getMdStr = () => import('../../../src/RequireScript/README.md');
}
