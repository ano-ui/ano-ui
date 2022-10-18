<script setup lang="ts">
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <div class="p-2">
        Base
      </div>
      <div p-2 flex="~ col gap2">
        <ACell title="Cell" />
        <ACell title="Cell" content="Content" />
        <ACell title="Cell" content="Content" icon="i-carbon-palm-tree" />
        <ACell title="Cell" content="Content" description="Description" />
        <ACell title="Cell" content="Content" description="Description" arrow />
        <ACell title="Cell" description="Description">
          <template #content>
            <AButton size="xs">
              ABtn
            </AButton>
          </template>
        </ACell>
      </div>
    </div>
  </UBasePage>
</template>
