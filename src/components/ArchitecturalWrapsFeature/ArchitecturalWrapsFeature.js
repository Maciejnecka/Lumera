import React from 'react';
import Link from 'next/link';
import { architecturalWrapsData as content } from '../../data/architecturalWrapsData';
import {
  WrapFeature, WrapCopy, WrapEyebrow, SurfaceLinks, WrapActions,
  WrapVisual, WrapProjects,
} from './ArchitecturalWrapsFeature.styled';

const ArchitecturalWrapsFeature = () => (
  <WrapFeature id="okleiny-architektoniczne" aria-labelledby="okleiny-feature-title" data-aos="fade-up">
    <WrapCopy>
      <WrapEyebrow>Metamorfozy z okleiną</WrapEyebrow>
      <h3 id="okleiny-feature-title">{content.title}</h3>
      <p>{content.lead}</p>
      <SurfaceLinks aria-label="Co oklejamy folią architektoniczną">
        {content.surfaces.map((surface) => (
          <Link key={surface.id} href={`${content.path}#${surface.id}`}>{surface.label}<span aria-hidden="true">↗</span></Link>
        ))}
      </SurfaceLinks>
      <WrapActions>
        <Link href={content.path}>Poznaj okleiny architektoniczne</Link>
        {content.localLinks.map((link) => <Link key={link.path} href={link.path}>{link.label}</Link>)}
      </WrapActions>
    </WrapCopy>
    <WrapVisual>
      <Link href={content.projects[0].path} aria-label="Zobacz metamorfozy drzwi i mebli przed i po">
        <img src={content.image} width="1600" height="1200" alt={content.imageAlt} loading="lazy" decoding="async" />
      </Link>
      <WrapProjects>
        <span>Zobacz nasze realizacje</span>
        {content.projects.map((project) => <Link key={project.path} href={project.path}>{project.label}<span aria-hidden="true">↗</span></Link>)}
      </WrapProjects>
    </WrapVisual>
  </WrapFeature>
);

export default ArchitecturalWrapsFeature;
