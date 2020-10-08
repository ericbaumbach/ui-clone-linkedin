<<<<<<< HEAD
import React from 'react';

import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingTrendingPanel: React.FC = () => {
  const Row = () => (
    <div className="row">
      <Skeleton className="square-skeleton white" />

      <div className="column">
        <Skeleton className="row-skeleton white" />
        <Skeleton className="row-skeleton white" />
      </div>
    </div>
  );

  return (
    <Container>
      <Row />
      <Row />
      <Row />
    </Container>
  );
};

export default LoadingTrendingPanel;
=======
import React from 'react';

import Panel from '../../Panel';
import Skeleton from '../../Skeleton';

import { Container } from './styles';

const LoadingTrendingPanel: React.FC = () => {
  const Row = () => (
    <div className="row">
      <Skeleton className="square-skeleton white" />

      <div className="column">
        <Skeleton className="square-skeleton white" />
        <Skeleton className="square-skeleton white" />
      </div>
    </div>
  )

  return (
    <Container>
      <Panel className="no-shadow">
        <Row />
        <Row />
        <Row />
      </Panel>
    </Container>
  );
}

export default LoadingTrendingPanel;
>>>>>>> video-entrypoint
