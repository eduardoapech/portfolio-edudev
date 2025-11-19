import { useState } from 'react'
import { StyledPortfolioSection, StyledInterface, StyledGrid, StyledProjectsTitle, StyledCategoryFilters } from './styles'
import ProjectCard from '../../molecules/ProjectCard'
import Title from '../../atoms/Title'
import Text from '../../atoms/Text'
import { useLanguage } from '../../../contexts/LanguageContext'
import { getTranslation } from '../../../locales'

const ProjectsGrid = ({ projects = [] }) => {
  const { language } = useLanguage()
  const t = (key) => getTranslation(language, key)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  const categories = [
    { key: 'all', label: t('projects.categories.all') },
    { key: 'backend', label: t('projects.categories.backend') },
    { key: 'frontend', label: t('projects.categories.frontend') },
  ]

  return (
    <StyledPortfolioSection>
      <StyledInterface>
        <StyledProjectsTitle>
          <Title size="2xl" marginBottom="10px">
            {t('projects.title')}
          </Title>
          <Text size="base" align="center" opacity={0.9}>
            {t('projects.subtitle')}
          </Text>
        </StyledProjectsTitle>

        <StyledCategoryFilters>
          {categories.map((category) => (
            <button
              key={category.key}
              className={selectedCategory === category.key ? 'active' : ''}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </StyledCategoryFilters>

        <StyledGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StyledGrid>
      </StyledInterface>
    </StyledPortfolioSection>
  )
}

export default ProjectsGrid

