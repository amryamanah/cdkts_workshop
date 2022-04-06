import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodeBuildStep, CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { WorkshopPipelineStage } from './pipeline-stage';

export class WorkshopPipelineStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // Pipeline code goes here

        // The basic pipeline declaration. This sets the initial structure
        // of our pipeline
        const pipeline = new CodePipeline(
            this, "CdktsWorkshopPipeline", 
            {
                pipelineName: "CdktsWorkshopPipeline",
                synth: new CodeBuildStep('SynthStep', {
                    input: CodePipelineSource.connection(
                        'amryamanah/cdkts_workshop',
                        'main', {
                            connectionArn: "arn:aws:codestar-connections:ap-southeast-1:376288083010:connection/a3d09f69-d8f8-4e39-b1c0-12878a88e275"
                        }
                    ),
                    installCommands: [
                        'npm install -g aws-cdk',
                    ],
                    commands: [
                        "npm ci",
                        "npx cdk synth",
                    ]
                })
            }
        );

        const deploy = new WorkshopPipelineStage(this, 'Deploy');
        const deployStage = pipeline.addStage(deploy);
    }

    
}
